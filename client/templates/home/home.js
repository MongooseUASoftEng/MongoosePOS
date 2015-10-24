Template.home.events({
  "submit #searchingCode": function(event, template){
    var searchedCode = $('#searchedCode').val();

    if (!searchedCode) {
      alert('Enter an item\'s look up code!');
      return;
    }

    //FlowRouter.go('/ProductsExample?limit=' + limit.trim());
    FlowRouter.go('/SelectedProduct?searchedCode=' + searchedCode);

    // Prevent form default. (Reloading page);
    return false;
  }
});
