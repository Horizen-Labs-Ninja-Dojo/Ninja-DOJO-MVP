const express = require('express');
const nftController = require('../controllers/nftController');
const router = express.Router();
// NFT routes
router.get('/', nftController.getAllNFTs);
router.get('/stats/marketplace', nftController.getMarketplaceStats);
router.get('/:id', nftController.getNFTById);
router.post('/', nftController.createNFT);
router.post('/:id/buy', nftController.buyNFT);
router.post('/:id/list', nftController.listNFT);

module.exports = router;