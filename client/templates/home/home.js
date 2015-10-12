Template.home.events({
  "submit #productsExample": function(event, template){
    var limit = $('#productsLimit').val();

    if (!limit) {
      alert('Enter the number of products you want to be published!');
      return;
    }

    FlowRouter.go('/ProductsExample?limit=' + limit.trim());

    // Prevent form default. (Reloading page);
    return false;
  }
});
