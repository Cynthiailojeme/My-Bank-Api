const express = require('express');
const router = express.Router();
const Account = require('../../models/Account');

// Get all the bank accounts
router.get('/', (req, res, next) => {
    Account.find()
        .then((accounts) => {
            res.json(accounts);
        })
        .catch(err => console.log(err))
});

// Get all one bank account
router.get('/single/:id', (req, res, next) => {
    //Grab the id of the bank account
    let id = req.params.id;
    Account.findById(id)
        .then((account) => {
            res.json(account);
        })
        .catch(err => console.log(err))
});

// Create a bank account
router.post('/createnew', (req, res, next) => {
    const id = req.body.id;
    const image = req.body.image;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const age = req.body.age;
    const email = req.body.email;
    const accountType = req.body.accountType;
    const cardNumber = req.body.cardNumber;
    newAccount = new Account({
        id: id,
        image: image,
        firstname: firstname,
        lastname: lastname,
        age: age,
        email: email,
        accountType: accountType,
        cardNumber: cardNumber
    });
    newAccount.save()
    .then(account => {
        res.json(account); 
    })
    .catch(err => console.log(err));
})

// to edit a bank account
router.put('/edit/:id', (req, res, next) => {
    //Grab the id of the bank account
    let id = req.params.id;
    // find the bank account by id from the databasse
        Account.findById(id)
        .then(account => {
            account.id = req.body.id;
            account.image = req.body.image;
            account.firstname = req.body.firstname;
            account.lastname = req.body.lastname;
            account.age = req.body.age;
            account.email = req.body.email;
            account.accountType = req.body.accountType;
            account.cardNumber = req.body.cardNumber;
            account.save()
            .then(account =>{
                res.send({message: 'Account updated succesfully',
                status: 'success',
                account: account})
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
        
    });

// make delete request
router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    Account.findById(id)
    .then(account => {
        account.delete()
        .then(account =>{
            res.send({message: 'Account deleted succesfully',
            status: 'success',
            account: account})

        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})


module.exports = router;