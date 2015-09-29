Transactions = new Mongo.Collection("transactions", {
  // Pass a transform function to change values to be formatted the way we want for the views.
  transform: function (transactions) {
    transactions.transactionType = transactionTypesEnum[transactions.transactionType];

    return transactions;
  }
});

var transactionTypeEnum = {
  "0": "Sale",
  "1": "Return",
  "2": "Void"
};

// Define the schema
var transactionsSchema = new SimpleSchema({
  recordId: {
    type: Number,
    optional: false,
    defaultValue: 0
  },
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
