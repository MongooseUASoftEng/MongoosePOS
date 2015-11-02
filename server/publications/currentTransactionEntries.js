Meteor.publish("currentTransactionEntries", function(){
  return TransactionEntries.find();
});
 
