FlowRouter.route('/ProductsExample', {
    // Render the 'page'
    action: function(params, queryParams) {
      BlazeLayout.render('layout', {
        header:'header',
        body: 'main',
        main: "productsExample"
      });
    },

    name: "productsExample" // optional
});
