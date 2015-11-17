Template.selectedProduct.helpers({
  selectedProduct: function () {
    return Products.findOne();
  },
});

Template.selectedProduct.events({
  "submit  #addingAmount": function(event, template){
    var addAmmountJS = document.getElementById('addAmount').value;
    var addAmount = $('#addAmount').val();

    if (!addAmount) {
      alert('Enter an ammount to add!');
    } else {
      alert('Added ' + addAmount);
    }

    return false;
  },
  "click  #cancel": function(event, template) {
    alert("Canceled");
  }
});

Template.selectedProduct.onCreated(function() {
  var self = this;
  // Subscribe to the data
  self.autorun(function() {
    var searchedCode = Number(FlowRouter.getParam('searchedCode'));
    self.subscribe('selectedProduct', searchedCode);
  });
});
