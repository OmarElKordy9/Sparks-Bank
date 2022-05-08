const router = require('express').Router();
let Transaction = require('../models/transaction');

router.route('/').get((req, res) => {
    Transaction.find()
    .then(transactions => res.json(transactions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const from = req.body.from;
    const to = req.body.to;
    const amount = Number(req.body.amount);

    const newTransaction = new Transaction ({
        from,
        to,
        amount,
    });

    newTransaction.save()
    .then(() => res.json('Transaction added !'))
    .catch(err => res.status(400).json('Error: ' + err));
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