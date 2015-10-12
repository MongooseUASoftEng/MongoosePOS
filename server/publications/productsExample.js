Meteor.publish("productsExample", function(lim){
  return Products.find({ }, { limit: lim });
});
