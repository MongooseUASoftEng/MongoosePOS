Meteor.methods({
  insertTenderEntry function (tenderEntry) {
    tenderEntries.insert({
      amount: Number(tenderEntry.amount),
      tenderType: tenderEntry.tenderType,
      recordID: Number(tenderEntry.recordID),
      transactionId: Number(tenderEntry.transactionID),
      productID: Number(tenderEntry.productID),
      timestamp: Date(tenderEntry.timestamp)
    })
  }
});
