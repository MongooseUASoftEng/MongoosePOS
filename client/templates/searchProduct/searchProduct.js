Template.searchProduct.events({
  "submit #searchingCode": function(event, template){
    var searchedCode = parseInt($('#searchedCode').val(), 10);

    if (!searchedCode) {
      alert('Enter an item\'s look up code!');
      return;
    }

    Session.set("searchedCode", searchedCode);
    document.getElementById("selectedProductContainer").style.height='500px';
    Blaze.render(Blaze.Template.selectedProduct, $('#selectedProductContainer').get(0)); //loads div


    // FlowRouter.go('/Product/' + searchedCode);
    // Prevent form default. (Reloading page);
    return false;
  }
});
