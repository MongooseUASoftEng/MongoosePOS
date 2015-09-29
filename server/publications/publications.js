// Autopublish all products.
// We will change this in the future to query out only ones we want
// for performance reasons.
Meteor.publish(null, function (){
	var data = [Employees.find(), Products.find(), Transactions.find()];
  return data;
});
