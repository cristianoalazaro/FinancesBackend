import Router from 'express';

import transactionController from '../controllers/TransactionController.js';
import loginRequired from '../middlewares/loginRequired.js';

const router = new Router();

router.get('/',loginRequired,transactionController.index);

export {router as transactionRoutes};