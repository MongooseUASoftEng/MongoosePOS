Meteor.methods({
  insertTransaction: function (transaction) {
    return Transactions.insert({
      cashierId: transaction.cashierId,
      amount: Number(transaction.amount) * 100,
      transactionType: enumManager.map('transactionType', transaction.transactionType),
      parentId: transaction.parentId,
      createdAt: Date.now()
    },
    // This is a part of the collection2 validation package.
    function (error, result) {
      // There are some corrupt entries in the csv.
      if (error) {
        throw error;
      }

      return result;
    });
  },
  submitTransaction: function (transactionEntries) {
    var amount = _.reduce(transactionEntries, function (memo, obj) {
      return memo + (obj.price * obj.quantity);
    }, 0);

    var transaction = {
      cashierId: 1,
      amount: amount,
      transactionType: "Sale",
      parentId: 1
    };

    var id = Meteor.call('insertTransaction', transaction);

    // Causes exception currently
    // transactionEntries.forEach(function (entry, i) {
    //   var dbEntry = {
    //     transactionId: id,
    //     productId: entry._id,
    //     price: entry.price,
    //     quantity: entry.quantity
    //   };
    //
    //   Meteor.call('insertTransactionEntry', dbEntry);
    // });
  }
});
