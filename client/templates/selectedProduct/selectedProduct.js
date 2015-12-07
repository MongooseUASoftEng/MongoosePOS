Template.selectedProduct.helpers({
  selectedProduct: function () {
    return Products.findOne();
  },
});

Template.selectedProduct.onCreated(function() {
  var self = this;
  // Subscribe to the data
  self.autorun(function() {
    var searchedCode = Number(FlowRouter.getParam('searchedCode'));
    self.subscribe('selectedProduct', searchedCode);
  });
});

Template.selectedProduct.onRendered(function () {
  // Auto focus on the submit button so you can just hit enter to submit.
  $('#addProduct').focus();
});

Template.selectedProduct.events({
  "submit #addProductForm": function(event, template){
    var code = getSelectedCode();

    if (Session.get('currentTransactionEntries') === undefined) {
      Session.set('currentTransactionEntries', [ code ]);
    } else {
      // Get the current entries, copy the array, add the new value to it.
      var entries = Session.get('currentTransactionEntries').slice().concat(code);
      Session.set('currentTransactionEntries', entries);
    }

    return false;
  }
});

function getSelectedCode () {
  return 710779560208;
}
