// Autopublish all products.
// We will change this in the future to query out only ones we want
// for performance reasons.
Meteor.publish(null, function () {
  return [
		Employees.find(),
		Products.find({}, { limit: 5 }),
		Transactions.find()
	];
});
