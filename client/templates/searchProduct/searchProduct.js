Template.searchProduct.events({
  "submit #searchingCode": function(event, template){
    var searchedCode = $('#searchedCode').val();

    if (!searchedCode) {
      alert('Enter an item\'s look up code!');
      return;
    }

    document.getElementById("selectedProduct").style.height='300px';

    // FlowRouter.go('/Product/' + searchedCode);

    // Prevent form default. (Reloading page);
    return false;
  }
});
