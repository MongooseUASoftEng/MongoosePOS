Meteor.publish("selectedProduct", function(searchedCode){
  return Products.find({ itemLookUpCode: searchedCode });
});
