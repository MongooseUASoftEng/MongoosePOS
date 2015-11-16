FlowRouter.route('/', {
    // do some action for this route
    action: function(params, queryParams) {
      BlazeLayout.render('layout', { header: 'header', body: "main", main: "home" });
    },

    name: "home" // optional
});
