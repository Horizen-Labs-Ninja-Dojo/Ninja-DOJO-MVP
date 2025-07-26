const express = require('express');
const daoController = require('../controllers/daoController');
const router = express.Router();

// DAO routes
router.get('/proposals', daoController.getAllProposals);
router.get('/proposals/:id', daoController.getProposalById);
router.post('/proposals', daoController.createProposal);
router.post('/proposals/:id/vote', daoController.voteOnProposal);
router.get('/stats', daoController.getDAOStats);
router.get('/voting-power/:userId', daoController.getVotingPower);
router.get('/treasury', daoController.getTreasury);

module.exports = router;