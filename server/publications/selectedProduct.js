Meteor.publish("selectedProduct", function(searchedCode){
  //debugger;
  return Products.find({itemLookUpCode: searchedCode}); //609492710116 this is lookup code i've been using as default/to test that it works
});
