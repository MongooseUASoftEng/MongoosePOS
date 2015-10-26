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
