import Router from 'express';

import userController from '../controllers/UserController.js';
import loginRequired from '../middlewares/loginRequired.js';

const router = new Router();

//router.get('/', userController.index);
router.get('/id/:id', loginRequired, userController.show);
router.get('/email/:email', loginRequired, userController.showByEmail);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.deleteOne);

export {router as userRoutes}; 
