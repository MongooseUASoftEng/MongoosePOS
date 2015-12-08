Template.transactionSummary.events({
  "click #completeTransaction": function(event, template){
    Meteor.call('submitTransaction', Session.get('currentTransactionEntries'));

    Session.set('searchedCode', undefined);
    Session.set('currentTransactionEntries', undefined);
    $('#searchedCode').val(null);

    FlowRouter.go('/');
  }
});
