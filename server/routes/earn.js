const express = require('express');
const earnController = require('../controllers/earnController');
const router = express.Router();

// Earn routes
router.get('/methods', earnController.getEarningMethods);
router.get('/leaderboard', earnController.getLeaderboard);
router.get('/user/:userId', earnController.getUserEarnings);
router.post('/claim', earnController.claimEarnings);
router.get('/staking/:userId', earnController.getStakingInfo);
router.post('/stake', earnController.stakeNFT);
router.post('/unstake', earnController.unstakeNFT);
router.get('/stats/global', earnController.getGlobalEarningStats);

module.exports = router;