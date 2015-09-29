Meteor.methods({
  insertTransaction: function (transactions) {
    Transactions.insert({
      recordId: transactions.recordId,
      cashierId: transactions.cashierId,
      amount: Number(transactions.amount),
      transactionType: transactions.transactionType,
      parentId:  transactions.parentId,
      createdAt: Date.now()
    })
  }
});
