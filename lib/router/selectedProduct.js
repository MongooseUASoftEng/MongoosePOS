FlowRouter.route('/Product/:searchedCode', {
    // Render the 'page'
    action: function(params, queryParams) {
      BlazeLayout.render('layout', {
        header:'header',
        body: 'main',
        main: "selectedProduct"
      });
    },

    name: "selectedProduct" // optional
});
