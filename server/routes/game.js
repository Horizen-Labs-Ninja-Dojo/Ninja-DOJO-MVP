const express = require('express');
const gameController = require('../controllers/gameController');
const router = express.Router();

// Game routes
router.get('/features', gameController.getFeatures);
router.get('/modes', gameController.getGameplayModes);
router.get('/player/:playerId/stats', gameController.getPlayerStats);
router.post('/mission/start', gameController.startMission);
router.post('/mission/complete', gameController.completeMission);

module.exports = router;