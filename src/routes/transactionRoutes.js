import Router from 'express';

import transactionController from '../controllers/TransactionController.js';

const router = new Router();

router.get('/',transactionController.index);

export {router as transactionRoutes};