Template.selectedProduct.helpers({
  selectedProduct: function () {
    return Products.findOne();
  },
});

Template.selectedProduct.onCreated(function() {
  var self = this;
  // Subscribe to the data
  self.autorun(function() {
    var limit = Number(FlowRouter.getQueryParam('searchedCode'));
    self.subscribe('selectedProduct', limit/*, searchedCode*/);
  });
});
