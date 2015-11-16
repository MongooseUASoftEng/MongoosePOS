Template.productsExample.helpers({
  products: function(){
    return Products.find();
  }
});

Template.productsExample.onCreated(function() {
  var self = this;
  // Subscribe to the data
  self.autorun(function() {
    var limit = Number(FlowRouter.getQueryParam('limit'));
    self.subscribe('productsExample', limit);
  });
});
