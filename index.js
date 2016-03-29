var stripe = require('stripe')('sk_test_yxqQ0PMzdFm9v8eXte2inPSd');

module.exports = {
	createCustomer: function(email) {
		var cust = stripe.customers.create(
			{ email: 'customer@example.com' },
			function(err, customer) {
				if(err){
					console.log('err = '+ err); // null if no error occurred
					return err;
				}
				console.log('customer = '+ JSON.stringify(customer)); // the created customer object
				return customer;
			}
		);
	},
	addCard: function(data, sucCb) {
		// console.log('data = '+ data);
		// console.log('data.email = '+ data.email);
		// console.log('data.stripeToken = '+ data.stripeToken);
		// Process
		// New Customer
		stripe.customers.create({
			email: data.email,
			source: data.stripeToken // obtained with Stripe.js
		}, function(err, customer) {
			sucCb(customer);
		});
		// // If customer Exists
		// stripe.customers.createSource(
		// 	data.customerId,
		// 	{source: data.stripeToken},
		// 	function(err, card) {
		// 		// asynchronously called
		// 	}
		// );
	},
	addAccount: function(data, sucCb) {
		stripe.recipients.create({
			name: data.name,
			email: data.email,
			type: data.type,
			bank_account: data.stripeToken,
		}, function(err, recipient) {
			sucCb(recipient);
		});
	},
	charge: function(data, sucCb) {
		stripe.charges.create({
			amount: data.amount,
			currency: data.currency, // usd
			source: data.token, // obtained with Stripe.js
			description: data.email // "Charge for test@example.com"
		}, function(err, charge) {
			// asynchronously called
			sucCb(charge);
		});
	},
	transfer: function(data, sucCb) {
		stripe.transfers.create({
			amount: data.amount,
			currency: data.currency,
			destination: data.accountToId, // "acct_15FlxgKF0bAo7kdu"
			description: data.accountFromId // "Transfer for test@example.com"
		}, function(err, transfer) {
			// asynchronously called
			sucCb(transfer);
		});
	}
};

