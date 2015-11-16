Template.currentTransactionEntries.helpers({
  currentTransactionEntries: function() {
    return TransactionEntries.find();
  }
})

Template.currentTransactionEntries.onCreated(function() {
  var self = this;
  // Subscribe to the data
  self.autorun(function() {
    self.subscribe('currentTransactionEntries');
  });
});
