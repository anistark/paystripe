# PayStripe

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