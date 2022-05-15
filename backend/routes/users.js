const router = require('express').Router();
let User = require('../models/user');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const accountNo = Number(req.body.accountNo);
    const balance = Number(req.body.balance);

    const newUser = new User({
        username,
        email,
        accountNo,
        balance,
    });

    newUser.save()
    .then(() => res.json('User added !'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;