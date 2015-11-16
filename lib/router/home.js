FlowRouter.route('/', {
    // do some action for this route
    action: function(params, queryParams) {
<<<<<<< HEAD
      BlazeLayout.render('layout', { header: 'header', body: "main", main: "home" });
=======
      BlazeLayout.render('layout', { header: 'header', body: "main", main: "transactionSummary" });
>>>>>>> master
    },

    name: "home" // optional
});
