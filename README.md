# Paypal payments provider

This is a plugin for NodeMVC to comunicate with paypal api.

## Get started

Import the provider from installed plugins:

```js
const Paypal = include("plugins.@nodemvc.paypal-payments-provider");

// Init Paypal Payouts SDK
const paypalPayouts = Paypal.init('payouts');
// Init Paypal Checkouts SDK
const paypalCheckouts = Paypal.init('checkouts');
```

Then you have access to the Stripe APIs SDK.

## Example

```js
const Paypal = include("plugins.@nodemvc.paypal-payments-provider");

const paypal = Paypal.init('payouts');
  
// Creating an environment
let clientId = "<<PAYPAL-CLIENT-ID>>";
let clientSecret = "<<PAYPAL-CLIENT-SECRET>>";
let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
let client = new paypal.core.PayPalHttpClient(environment);

let requestBody = {
    "sender_batch_header": {
      "recipient_type": "EMAIL",
      "email_message": "SDK payouts test txn",
      "note": "Enjoy your Payout!!",
      "sender_batch_id": "Test_sdk_1",
      "email_subject": "This is a test transaction from SDK"
    },
    "items": [{
      "note": "Your 1$ Payout!",
      "amount": {
        "currency": "USD",
        "value": "1.00"
      },
      "receiver": "payout-sdk-1@paypal.com",
      "sender_item_id": "Test_txn_1"
    }, {
      "note": "Your 1$ Payout!",
      "amount": {
        "currency": "USD",
        "value": "1.00"
      },
      "receiver": "payout-sdk-2@paypal.com",
      "sender_item_id": "Test_txn_2"
    }, {
      "note": "Your 1$ Payout!",
      "amount": {
        "currency": "USD",
        "value": "1.00"
      },
      "receiver": "payout-sdk-3@paypal.com",
      "sender_item_id": "Test_txn_3"
    }, {
      "note": "Your 1$ Payout!",
      "amount": {
        "currency": "USD",
        "value": "1.00"
      },
      "receiver": "payout-sdk-4@paypal.com",
      "sender_item_id": "Test_txn_4"
    }, {
      "note": "Your 1$ Payout!",
      "amount": {
        "currency": "USD",
        "value": "1.00"
      },
      "receiver": "payout-sdk-5@paypal.com",
      "sender_item_id": "Test_txn_5"
    }]
  }

// Construct a request object and set desired parameters
// Here, PayoutsPostRequest() creates a POST request to /v1/payments/payouts
let request = new paypal.payouts.PayoutsPostRequest();
request.requestBody(requestBody);

// Call API with your client and get a response for your call
let createPayouts  = async function(){
        let response = await client.execute(request);
        console.log(`Response: ${JSON.stringify(response)}`);
        // If call returns body in response, you can get the deserialized version from the result attribute of the response.
        console.log(`Payouts Create Response: ${JSON.stringify(response.result)}`);
}
createPayouts();
```

Check out more [here](https://github.com/paypal/Payouts-NodeJS-SDK) for Payouts and [here](https://github.com/paypal/Checkout-NodeJS-SDK) for Checkouts.
