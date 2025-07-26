const NFT = require('../models/NFT');
const User = require('../models/User');

// Get all NFTs with filtering
exports.getAllNFTs = async (req, res) => {
  try {
    const { category, rarity, minPrice, maxPrice, search, page = 1, limit = 20 } = req.query;
    
    let query = {};
    
    // Apply filters
    if (category) query.category = category;
    if (rarity) query.rarity = rarity;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    if (minPrice) query.priceUSD = { $gte: parseFloat(minPrice) };
    if (maxPrice) {
      query.priceUSD = query.priceUSD ? 
        { ...query.priceUSD, $lte: parseFloat(maxPrice) } : 
        { $lte: parseFloat(maxPrice) };
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const nfts = await NFT.find(query)
      .populate('owner', 'username walletAddress')
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await NFT.countDocuments(query);

    res.json({
      success: true,
      data: nfts,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Get NFTs error:', error);
    res.status(500).json({ error: 'Failed to get NFTs' });
  }
};

// Get NFT by ID
exports.getNFTById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const nft = await NFT.findById(id).populate('owner', 'username walletAddress');
    
    if (!nft) {
      return res.status(404).json({ error: 'NFT not found' });
    }
    
    res.json({
      success: true,
      data: nft
    });
  } catch (error) {
    console.error('Get NFT error:', error);
    res.status(500).json({ error: 'Failed to get NFT' });
  }
};

// Create new NFT
exports.createNFT = async (req, res) => {
  try {
    const nftData = req.body;
    
    const nft = new NFT(nftData);
    await nft.save();
    
    res.status(201).json({
      success: true,
      message: 'NFT created successfully',
      data: nft
    });
  } catch (error) {
    console.error('Create NFT error:', error);
    res.status(500).json({ error: 'Failed to create NFT' });
  }
};

// Buy NFT
exports.buyNFT = async (req, res) => {
  try {
    const { id } = req.params;
    const { buyerId, walletAddress, transactionHash } = req.body;
    
    const nft = await NFT.findById(id);
    const buyer = await User.findById(buyerId);
    
    if (!nft) {
      return res.status(404).json({ error: 'NFT not found' });
    }
    
    if (!buyer) {
      return res.status(404).json({ error: 'Buyer not found' });
    }
    
    if (!nft.forSale) {
      return res.status(400).json({ error: 'NFT is not for sale' });
    }
    
    if (buyer.ninjaTokens < nft.priceUSD) {
      return res.status(400).json({ error: 'Insufficient NINJA tokens' });
    }
    
    // Transfer ownership
    const previousOwner = nft.owner;
    nft.owner = buyerId;
    nft.forSale = false;
    await nft.save();
    
    // Update buyer tokens
    buyer.ninjaTokens -= nft.priceUSD;
    await buyer.save();
    
    // Update seller tokens if exists
    if (previousOwner) {
      const seller = await User.findById(previousOwner);
      if (seller) {
        seller.ninjaTokens += nft.priceUSD;
        seller.stats.totalEarnings += nft.priceUSD;
        await seller.save();
      }
    }
    
    const purchase = {
      nftId: nft._id,
      buyerId,
      price: nft.price,
      priceUSD: nft.priceUSD,
      transactionHash,
      purchasedAt: new Date().toISOString()
    };
    
    res.json({
      success: true,
      message: 'NFT purchased successfully',
      data: purchase
    });
  } catch (error) {
    console.error('Buy NFT error:', error);
    res.status(500).json({ error: 'Failed to buy NFT' });
  }
};

// List NFT for sale
exports.listNFT = async (req, res) => {
  try {
    const { id } = req.params;
    const { sellerId, price, priceUSD } = req.body;
    
    const nft = await NFT.findById(id);
    
    if (!nft) {
      return res.status(404).json({ error: 'NFT not found' });
    }
    
    if (nft.owner.toString() !== sellerId) {
      return res.status(403).json({ error: 'You do not own this NFT' });
    }
    
    nft.price = price;
    nft.priceUSD = priceUSD;
    nft.forSale = true;
    await nft.save();
    
    res.json({
      success: true,
      message: 'NFT listed for sale successfully',
      data: nft
    });
  } catch (error) {
    console.error('List NFT error:', error);
    res.status(500).json({ error: 'Failed to list NFT' });
  }
};

// Get marketplace stats
exports.getMarketplaceStats = async (req, res) => {
  try {
    const totalNFTs = await NFT.countDocuments();
    const forSaleNFTs = await NFT.countDocuments({ forSale: true });
    
    const avgPriceResult = await NFT.aggregate([
      { $match: { forSale: true } },
      { $group: { _id: null, avgPrice: { $avg: '$priceUSD' } } }
    ]);
    
    const topSale = await NFT.findOne({ forSale: true }).sort({ priceUSD: -1 });
    
    const categories = await NFT.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } }
    ]);
    
    const rarities = await NFT.aggregate([
      { $group: { _id: '$rarity', count: { $sum: 1 } } }
    ]);
    
    const stats = {
      totalNFTs,
      forSaleNFTs,
      totalVolume: '1,247 ETH',
      totalVolumeUSD: 2119900,
      averagePrice: '1.5 ETH',
      averagePriceUSD: avgPriceResult[0]?.avgPrice || 0,
      topSale: topSale ? {
        name: topSale.name,
        price: topSale.price,
        priceUSD: topSale.priceUSD
      } : null,
      categories: categories.reduce((acc, cat) => {
        acc[cat._id] = cat.count;
        return acc;
      }, {}),
      rarities: rarities.reduce((acc, rar) => {
        acc[rar._id] = rar.count;
        return acc;
      }, {})
    };
    
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('Get marketplace stats error:', error);
    res.status(500).json({ error: 'Failed to get marketplace stats' });
  }
};