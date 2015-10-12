Meteor.methods({
  insertTenderEntry: function (tenderEntry) {
    TenderEntries.insert({
      amount: Number(tenderEntry.amount),
      tenderType: enumManager.map('tenderType', tenderEntry.tenderType),
      recordID: Number(tenderEntry.recordID),
      transactionId: Number(tenderEntry.transactionID),
      productID: Number(tenderEntry.productID),
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
