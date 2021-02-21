import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    user: {
        type: String,
        required: [true, 'Usuário não pode ser vazio'],
        trim: true,
    },
    type:{
        type: String,
        match: /[+|-]/,
    },
    date:{
        type: Date,
        required: [true, 'Data inválida'],
        trim: true,
        default: Date.now
    },   
    description: {
        type: String,
        required: [true, 'Descrição não pode ser vazio'],
        trim: true,
    },
    value: {
        type: Number,
        required: [true, 'Valor não pode ser vazio'],
        min: 0,
        default: 0,
    }
})

const Transaction = mongoose.model('transaction', transactionSchema);

export default Transaction;