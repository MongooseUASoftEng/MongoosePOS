Template.transactionHistory.helpers({
  transactions: function () {
    return Transactions.find();
  },
});

Template.transactionHistory.onCreated(function() {
  var self = this;

  // Subscribe to the data
  self.autorun(function() {
    self.subscribe('transactionHistory');
  });
});
