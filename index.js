class PaypalPaymentsProvider {
  static availableMode = ['checkouts', 'payouts'];

  static init = (mode = 'checkouts') => {
    if (PaypalPaymentsProvider.availableMode.indexOf(mode) === -1) {
      if (debug) {
        debug.danger(`Mode option must be one of ${PaypalPaymentsProvider.availableMode}.`);
        return;
      } else {
        throw new Error(`Mode option must be one of ${PaypalPaymentsProvider.availableMode}.`);
      }
    }
    if (mode == 'checkouts') return require('@paypal/checkout-server-sdk');
    else if (mode == 'payouts') return require('@paypal/payouts-sdk');
  }
}

module.exports = PaypalPaymentsProvider;
