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
