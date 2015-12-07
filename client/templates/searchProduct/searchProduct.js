Template.searchProduct.events({
  "submit #searchingCode": function(event, template){
    var searchedCode = $('#searchedCode').val();

    if (!searchedCode) {
      alert('Enter an item\'s look up code!');
      return;
    }

    Session.set("searchedCode", searchedCode);
    document.getElementById("selectedProductContainer").style.height='300px';
    // Blaze.render(Blaze.template.selectedProduct, $('selectedProductContainer').get(0)); //loads div


    // FlowRouter.go('/Product/' + searchedCode);
    // Prevent form default. (Reloading page);
    return false;
  }
});
