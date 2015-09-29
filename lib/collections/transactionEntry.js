TransactionEntries = new Mongo.Collection('transactionEntries', {
  transform: function (transactionEntry) {
    transactionEntry.price = (transactionEntry.price / 100).toFixed(2);

    return transactionEntry;
  }
});

transactionEntrySchema = new SimpleSchema({
  transactionId: {
    type: String,
    optional: false
  },
  productId: {
    type: String,
    optional: false
  },
  price: {
    type: Number,
    optional: false
  },
  quantity: {
    type: Number,
    optional: false
  }
});

TransactionEntries.attachSchema(transactionEntrySchema);
