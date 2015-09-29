Meteor.methods({
  insertTransaction: function (transaction) {
    transaction.insert({
      firstName: transaction.recordId,
      cashierId: transaction.cashierId,
      amount: Number(transaction.amount),
      transactionType: transaction.transactionType,
      parentId:  transaction.parentId,
      createdAt: Date.now()
    })
  }
});
