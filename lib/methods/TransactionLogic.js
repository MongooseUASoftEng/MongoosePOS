Meteor.methods({
  insertTransaction: function (transaction) {
    Transactions.insert({
      recordId: transaction.recordId,
      cashierId: transaction.cashierId,
      amount: Number(transaction.amount),
      transactionType: transaction.transactionType,
      parentId: transaction.parentId,
      createdAt: Date.now()
    })
  }
});
