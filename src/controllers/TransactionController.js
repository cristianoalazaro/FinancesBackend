import mongoose from 'mongoose';

import Transaction from '../models/TransactionModel.js';

const index = async (req, res)=>{
    try{
        const user = req.userId;
        const transactions = await Transaction.find({user});
        return res.json(transactions);
    } catch(error){
        res.status(400).json({errors: error.errors});
    }
}

export default {index};