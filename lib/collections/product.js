Products = new Mongo.Collection("products", {
  // Pass a transform function to change values to be formatted the way we want for the views.
  transform: function (product) {
    product.itemType = itemTypesEnum[product.itemType];

    // Change money back to dollars from cents.
    // Fix it to 2 decimal places.
    product.price = (product.price / 100).toFixed(2);
    product.cost = (product.cost / 100).toFixed(2);

    return product;
  }
});

var itemTypesEnum = {
  "0": "Normal",
  "1": "Serialized",
  "2": "Matrix"
};

// Define the schema
var productSchema = new SimpleSchema({
  description: {
    type: String,
    optional: false
  },
  price: {
    type: Number,
    optional: false,
    defaultValue: 0
  },
  cost: {
    type: Number,
    optional: false,
    defaultValue: 0
  },
  itemLookUpCode: {
    type: Number,
    optional: false
  },
  itemType: {
    type: Number,
    optional: false,
    defaultValue: 0
  },
  quantity: {
    type: Number,
    optional: false,
    defaultValue: 0
  },
  reorderPoint: {
    type: Date,
    optional: true
  },
  restockLevel: {
    type: Number,
    optional: false,
    defaultValue: 0
  },
  parentItem: {
    type: Number,
    optional: false
  },
  extendedDescription: {
    type: String,
    optional: true
  },
  isActive: {
    type: Boolean,
    optional: false,
    defaultValue: true
  },
  msrp: {
    type: Number,
    optional: false,
    defaultValue: 0.00
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: Date.now()
  }
});

Products.attachSchema(productSchema);

