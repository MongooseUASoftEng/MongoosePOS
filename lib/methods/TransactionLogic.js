Meteor.methods({
  insertTransaction: function (transaction) {
    Transactions.insert({
      cashierId: transaction.cashierId,
      amount: Number(transaction.amount) * 100,
      transactionType: enumManager('transactionType', transaction.transactionType),
      parentId: transaction.parentId,
      createdAt: Date.now()
    },
    // This is a part of the collection2 validation package.
    function (error, result) {
      // There are some corrupt entries in the csv.
      if (error) {
        throw error;
      }
    });
  }
});
