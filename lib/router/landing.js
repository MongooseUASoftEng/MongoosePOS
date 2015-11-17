FlowRouter.route('/', {
    // do some action for this route
    action: function(params, queryParams) {
      BlazeLayout.render('layout', { body: "main", main: "landing" });
    },

    name: "landing" // optional
});
