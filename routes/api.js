// const express = require('express');
// const router = express.Router();

// // Middlewares
// const { protect, authorize } = require('../middlewares/auth');

// // Modèles 
// const Project = require('../models/Project'); 
// const User = require('../models/user');

// // Contrôleurs
// const projectCtrl = require('../controllers/projectController');
// const investCtrl = require('../controllers/investmentController');
// const adminCtrl = require('../controllers/adminController');
// const authCtrl = require('../controllers/authController');

// // _____________________________________________
// // ROUTES PUBLIQUES (OU AUTHENTIFIÉES)
// router.post('/projects', protect, authorize('owner'), projectCtrl.createProject);
// router.get('/my-projects', protect, authorize('owner'), projectCtrl.getMyProjects);

// // ROUTES INVESTISSEURS
// router.get('/open-projects', protect, authorize('investor'), async (req, res) => {
//     const projects = await Project.find({ status: 'open' });
//     res.json(projects);
// });
// router.post('/invest', protect, authorize('investor'), investCtrl.invest);

// // ROUTES ADMIN
// router.get('/admin/dashboard', protect, authorize('admin'), adminCtrl.getGlobalStats);

// //Pour authentifier
// router.post('/register', authCtrl.register);
// router.post('/login', authCtrl.login);

// module.exports = router;