Meteor.methods({
  insertProduct: function (product) {
    Products.insert({
      description: product.description.trim(), // Trim just to clean up
      price: Number(product.price), // Ensure its in correct format.
      itemLookUpCode: Number(product.itemLookUpCode),
      itemType: Number(product.itemType),
      quantity: Number(product.quantity),
      reorderPoint: Number(product.reorderPoint),
      restockLevel: Number(product.restockLevel),
      parentItem: Number(product.parentItem),
      extendedDescription: product.extendedDescription ? product.extendedDescription.trim() : "", // There are some entries with no value here.
      isActive: product.isActive,
      msrp: Number(product.msrp),
      createdAt: Date(product.createdAt)
    },
    // This is a part of the collection2 validation package.
    function (error, result) {
      // There are some corrupt entries in the csv.
      if (error) {
        throw error;
      }
    });
  }
});
