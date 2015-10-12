Transactions = new Mongo.Collection("transactions", {
  // Pass a transform function to change values to be formatted the way we want for the views.
  transform: function (transactions) {
    transactions.transactionType = enumManager.map('transactionType', transaction.transactionType);
    transaction.amount = (transaction.amount / 100).toFixed(2);

    return transactions;
  }
});

// Define the schema
var transactionsSchema = new SimpleSchema({
  cashierId: {
    type: Number,
    optional: false,
    defaultValue: 0
  },
  amount: {
    type: Number,
    optional: false,
    defaultValue: 0
  },
  transactionType: { // maps to enum
    type: Number,
    optional: false,
    defaultValue: 0
  },
  parentId: {
    type: Number,
    optional: false
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: Date.now()
  }
});

Transactions.attachSchema(transactionsSchema);
