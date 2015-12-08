Meteor.methods({
  insertTransactionEntry: function (transactionEntry) {
    TransactionEntries.insert({
      transactionId: transactionEntry.transactionId,
      productId: transactionId.productId,
      price: transactionId.price * 100, // Store in cents to prevent rounding
      quantity: transactionId.quantity,
      createdAt: Date.now()
    },
    // This is a part of the collection2 validation package.
    function (error, result) {
      if (error) {
        throw error;
      }
    });
  }
});
