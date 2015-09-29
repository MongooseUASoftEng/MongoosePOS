Meteor.methods({
  insertTenderEntry: function (tenderEntry) {
    TenderEntries.insert({
      amount: Number(tenderEntry.amount),
      tenderType: tenderEntry.tenderType,
      recordID: Number(tenderEntry.recordID),
      transactionId: Number(tenderEntry.transactionID),
      productID: Number(tenderEntry.productID),
      createdAt: Date(tenderEntry.createdAt)
    })
  }
});