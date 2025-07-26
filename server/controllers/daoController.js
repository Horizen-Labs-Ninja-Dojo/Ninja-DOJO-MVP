const Proposal = require('../models/Proposal');
const User = require('../models/User');

// Get all proposals
exports.getAllProposals = async (req, res) => {
  try {
    const { status, type, page = 1, limit = 10 } = req.query;
    
    let query = {};
    if (status) query.status = status;
    if (type) query.type = type;
    
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const proposals = await Proposal.find(query)
      .populate('proposer', 'username walletAddress')
      .populate('voters.user', 'username')
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });
    
    const total = await Proposal.countDocuments(query);
    
    // Add virtual timeLeft to each proposal
    const proposalsWithTimeLeft = proposals.map(proposal => ({
      ...proposal.toObject(),
      timeLeft: proposal.timeLeft
    }));
    
    res.json({
      success: true,
      data: proposalsWithTimeLeft,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Get proposals error:', error);
    res.status(500).json({ error: 'Failed to get proposals' });
  }
};

// Get proposal by ID
exports.getProposalById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const proposal = await Proposal.findById(id)
      .populate('proposer', 'username walletAddress')
      .populate('voters.user', 'username');
    
    if (!proposal) {
      return res.status(404).json({ error: 'Proposal not found' });
    }
    
    const proposalWithTimeLeft = {
      ...proposal.toObject(),
      timeLeft: proposal.timeLeft
    };
    
    res.json({
      success: true,
      data: proposalWithTimeLeft
    });
  } catch (error) {
    console.error('Get proposal error:', error);
    res.status(500).json({ error: 'Failed to get proposal' });
  }
};

// Create new proposal
exports.createProposal = async (req, res) => {
  try {
    const { title, description, type, proposerId, durationDays = 7 } = req.body;
    
    const proposer = await User.findById(proposerId);
    if (!proposer) {
      return res.status(404).json({ error: 'Proposer not found' });
    }
    
    if (proposer.ninjaTokens < 1000) {
      return res.status(400).json({ error: 'Insufficient tokens to create proposal (1000 NINJA required)' });
    }
    
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + durationDays);
    
    const newProposal = new Proposal({
      title,
      description,
      type,
      proposer: proposerId,
      endDate,
      status: 'Discussion'
    });
    
    await newProposal.save();
    await newProposal.populate('proposer', 'username walletAddress');
    
    // Deduct tokens from proposer
    proposer.ninjaTokens -= 1000;
    await proposer.save();
    
    res.status(201).json({
      success: true,
      message: 'Proposal created successfully',
      data: newProposal
    });
  } catch (error) {
    console.error('Create proposal error:', error);
    res.status(500).json({ error: 'Failed to create proposal' });
  }
};

// Vote on proposal
exports.voteOnProposal = async (req, res) => {
  try {
    const { id } = req.params;
    const { vote, voterId, tokenAmount = 1 } = req.body;
    
    const proposal = await Proposal.findById(id);
    const voter = await User.findById(voterId);
    
    if (!proposal) {
      return res.status(404).json({ error: 'Proposal not found' });
    }
    
    if (!voter) {
      return res.status(404).json({ error: 'Voter not found' });
    }
    
    if (proposal.status !== 'Active') {
      return res.status(400).json({ error: 'Proposal is not active for voting' });
    }
    
    if (new Date() > proposal.endDate) {
      return res.status(400).json({ error: 'Voting period has ended' });
    }
    
    if (voter.ninjaTokens < tokenAmount) {
      return res.status(400).json({ error: 'Insufficient tokens for voting' });
    }
    
    // Check if user already voted
    const existingVote = proposal.voters.find(v => v.user.toString() === voterId);
    if (existingVote) {
      return res.status(400).json({ error: 'User has already voted on this proposal' });
    }
    
    // Add vote
    if (vote === 'for') {
      proposal.votes.for += tokenAmount;
    } else if (vote === 'against') {
      proposal.votes.against += tokenAmount;
    } else {
      return res.status(400).json({ error: 'Invalid vote type' });
    }
    
    proposal.voters.push({
      user: voterId,
      vote,
      tokenAmount,
      votedAt: new Date()
    });
    
    await proposal.save();
    
    // Deduct tokens from voter (staking for voting)
    voter.ninjaTokens -= tokenAmount;
    await voter.save();
    
    const voteRecord = {
      proposalId: proposal._id,
      voterId,
      vote,
      tokenAmount,
      votedAt: new Date().toISOString()
    };
    
    res.json({
      success: true,
      message: 'Vote cast successfully',
      data: voteRecord
    });
  } catch (error) {
    console.error('Vote error:', error);
    res.status(500).json({ error: 'Failed to cast vote' });
  }
};

// Get DAO statistics
exports.getDAOStats = async (req, res) => {
  try {
    const totalVoters = await User.countDocuments({ ninjaTokens: { $gte: 100 } });
    const proposalsPassed = await Proposal.countDocuments({ status: 'Passed' });
    
    const totalStakedResult = await User.aggregate([
      { $group: { _id: null, totalStaked: { $sum: '$ninjaTokens' } } }
    ]);
    
    const stats = [
      { label: 'Total Voters', value: totalVoters.toLocaleString(), icon: 'Users', color: 'text-cyan-400' },
      { label: 'Proposals Passed', value: proposalsPassed.toString(), icon: 'CheckCircle', color: 'text-green-400' },
      { label: 'Total Tokens Staked', value: `${(totalStakedResult[0]?.totalStaked / 1000000 || 0).toFixed(1)}M`, icon: 'Coins', color: 'text-yellow-400' },
      { label: 'Treasury Value', value: '$1.2M', icon: 'TrendingUp', color: 'text-purple-400' }
    ];
    
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('Get DAO stats error:', error);
    res.status(500).json({ error: 'Failed to get DAO stats' });
  }
};

// Get user's voting power
exports.getVotingPower = async (req, res) => {
  try {
    const { userId } = req.params;
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const userVotes = await Proposal.countDocuments({
      'voters.user': userId
    });
    
    const userProposals = await Proposal.countDocuments({
      proposer: userId
    });
    
    const votingPower = {
      userId,
      stakedTokens: user.ninjaTokens,
      votingWeight: user.ninjaTokens,
      multiplier: 1.0,
      rank: user.rank,
      proposalsVoted: userVotes,
      proposalsCreated: userProposals
    };
    
    res.json({
      success: true,
      data: votingPower
    });
  } catch (error) {
    console.error('Get voting power error:', error);
    res.status(500).json({ error: 'Failed to get voting power' });
  }
};

// Get treasury information
exports.getTreasury = async (req, res) => {
  try {
    const treasury = {
      totalValue: 1200000,
      assets: [
        { token: 'ETH', amount: 450, valueUSD: 765000 },
        { token: 'NINJA', amount: 2800000, valueUSD: 280000 },
        { token: 'USDC', amount: 155000, valueUSD: 155000 }
      ],
      monthlyIncome: 85000,
      monthlyExpenses: 42000,
      proposals: [
        { title: 'Marketing Campaign', requested: 50000, status: 'Pending' },
        { title: 'Development Fund', requested: 100000, status: 'Approved' }
      ]
    };
    
    res.json({
      success: true,
      data: treasury
    });
  } catch (error) {
    console.error('Get treasury error:', error);
    res.status(500).json({ error: 'Failed to get treasury' });
  }
};