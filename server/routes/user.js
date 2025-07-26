const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// User routes
router.get('/:userId', userController.getUserProfile);
router.put('/:userId', userController.updateUserProfile);
router.get('/:userId/inventory', userController.getUserInventory);
router.get('/:userId/achievements', userController.getUserAchievements);
router.get('/:userId/battles', userController.getUserBattles);
router.put('/:userId/preferences', userController.updateUserPreferences);

module.exports = router;