Template.selectedProduct.helpers({
  selectedProduct: function () {
    return Products.findOne();
  },
});

Template.selectedProduct.onCreated(function() {
  var self = this;

  // Subscribe to the data
  self.autorun(function() {
    var searchedCode = Session.get("searchedCode");
    self.subscribe('selectedProduct', searchedCode);
  });
});

Template.selectedProduct.onRendered(function () {
  // Auto focus on the submit button so you can just hit enter to submit.
  $('#addProduct').focus();
});

Template.selectedProduct.events({
  "submit #addProductForm": function(event, template){
    var prod = Products.findOne();

    var newTransaction = {
      _id: prod._id,
      title: prod.description,
      itemLookupCode: prod.itemLookupCode,
      quantity: Number.parseInt($('#quantity').val(), 10),
      price: prod.price
    };

    if (Session.get('currentTransactionEntries') === undefined) {
      Session.set('currentTransactionEntries', [ newTransaction ]);
    } else {
      // Get the current entries, copy the array, add the new value to it.
      var entries = Session.get('currentTransactionEntries').slice().concat(newTransaction);
      Session.set('currentTransactionEntries', entries);
    }

    resetSearch(event, template);

    return false;
  },
  "click .cancel": resetSearch
});

function resetSearch(event, template) {
  Session.set('searchedCode', undefined);
  Blaze.remove(template.view);
  $('#searchedCode').val(null);
}
