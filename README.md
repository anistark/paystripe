# PayStripe

[![Version npm](https://img.shields.io/npm/v/paystripe.svg?style=flat-square)](https://www.npmjs.com/package/paystripe) [![npm Downloads](https://img.shields.io/npm/dm/paystripe.svg?style=flat-square)](https://www.npmjs.com/package/paystripe) [![Dependency Status](https://david-dm.org/anistark/paystripe.svg)](https://david-dm.org/anistark/paystripe) 

[![NPM](https://nodei.co/npm/paystripe.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/paystripe/)

[![NPM](https://nodei.co/npm-dl/paystripe.png)](https://nodei.co/npm/paystripe/)


Private Node Module for Taxinode to pay via stripe

Install
```
npm install paystripe
```

Usage:
```
payStripe = require('paystripe')
```

Creating Customers:
```
payStripecreateCustomer(email)
```

Views:
Add Card: views/addCard
Add Account: views/addAccount

Adding Card:
```
payStripeaddCard(data,success)
```

Adding Account/Recipient:
```
payStripeaddAccount(data,success)
```

Charging:
```
payStripecharge(data,success)
```

Transfer Money (account to account):
```
payStripetransfer(data,success)
```

# paystripe
Easy Stripe Payment Gateway integration in Node.js



## Under Developement
