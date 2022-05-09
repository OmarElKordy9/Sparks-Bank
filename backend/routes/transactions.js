const router = require('express').Router();
const Transaction = require('../models/transaction');
const User = require('../models/user')

router.route('/').get((req, res) => {
    Transaction.find()
    .then(transactions => res.json(transactions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async (req, res) => {
    const from = req.body.from;
    const to = req.body.to;
    const amount = Number(req.body.amount);

    try{
        var fromUser =  await User.findOne({username: from})
        var toUser = await User.findOne({username:to})
    }catch(error){
        console.log(error)
    }
    var fromBalance = fromUser.balance
    var toBalance = toUser.balance
    if(fromBalance<amount || amount <= 0){
        res.status(400).json('Error: No Sufficient Amount!');
    }else{
    
        var updatedFromBalance=fromBalance-amount;
        var updatedToBalance= toBalance+amount;
        try {
            var newTransaction=await Transaction.create({from,to,amount})
            var updatedFromUser= await User.findOneAndUpdate({username:from},{balance:updatedFromBalance})
            var updatedToUser = await User.findOneAndUpdate({username:to},{balance:updatedToBalance})
        } catch (error) {
            console.log(error)
            res.status(400).json('Something has happened when updating user')
        }
       
        res.status(201).json({transaction:newTransaction, updatedFrom: updatedFromUser, updatedTo:updatedToUser})
    }
});

router.route('/:id').get((req, res) => {
    Transaction.findById(req.params.id)
    .then(transactions => res.json(transactions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Transaction.findByIdAndDelete(req.params.id)
    .then(() => res.json('Transaction deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Transaction.findById(req.params.id)
    .then(transaction => {
        transaction.from = req.body.from;
        transaction.to = req.body.to;
        transaction.amount = req.body.amount;

        transaction.save()
        .then(() => res.json('Transaction updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;