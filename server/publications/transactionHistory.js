Meteor.publish("transactionHistory", function(){
  return Transactions.find();
});
