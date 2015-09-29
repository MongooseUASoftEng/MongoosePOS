Meteor.startup(function () {
  // If this is the first time the project is being ran on this machine,
  // the products database will be empty.
  // Run this code to populate the database.
  if (Products.find().count() === 0) {
    var fs = Meteor.npmRequire('fs');

    // Path to csv file
    var file;
    if (process.env.OS === "Windows_NT") {
      file = process.env.PWD + '/../../../../../../server/data/products.csv';
    } else {
      file = process.env.PWD + '/server/data/products.csv';
    }

    // Initialize callback function to parse data into MongoDB collection.
    var parser = CSVParse({delimiter: '\n'}, Meteor.bindEnvironment(function (err, data) {
      if (err) return;

      // First entry in array is string of the keys.
      var keys = data[0][0].split(',');

      // The rest are the products.
      data.slice(1).forEach(function (productStr, index) {
        // Map keys and value to an object.
        var p = _.object(keys, productStr[0].split(','));

        // Only insert if there is a description.
        // Entries without this are corrupt data.
        if (p.Description) {
          // Keep only the fields we want.
          var product = {
            description: p.Description.trim(), // Trim just to clean up.
            price: Math.round(Number(p.Price) * 100), // Lets store money in cents so we don't lose precision.
            cost: Math.round(Number(p.Cost) * 100),
            itemLookUpCode: Number(p.ItemLookupCode),
            itemType: Number(p.ItemType),
            quantity: Number(p.Quantity),
            reorderPoint: Number(p.ReorderPoint),
            restockLevel: Number(p.RestockLevel),
            parentItem: Number(p.ParentItem),
            extendedDescription: p.ExtendedDescription ? p.ExtendedDescription.trim() : "", // There are some entries with no value here.
            isActive: !Number(p.Inactive),
            msrp: Number(p.MSRP),
            createdAt: Date(p.DateCreated)
          }

          // Do this in a try since there are corrupt entries in the .csv file.
          try {
            // Call the insertProduct method.
            Meteor.call("insertProduct", product);
          } catch (error) { /* Ignore */ }
        }
      });
    }));

    // Read the .csv file to parse the data.
    fs.createReadStream(file).pipe(parser);
  }
});
