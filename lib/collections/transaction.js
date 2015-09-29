Transaction = new Mongo.Collection("transaction", {
  // Pass a transform function to change values to be formatted the way we want for the views.
  transform: function (transaction) {
    transaction.transactionType = transactionTypesEnum[transaction.transactionType];

    return transaction;
  }
});

var transactionTypeEnum = {
  "0": "Sale",
  "1": "Return",
  "2": "Void"
};

// Define the schema
var transactionSchema = new SimpleSchema({
  recordId: {
    type: Number,
    optional: false,
    defaultValue: 0
  },
  cashierId: {
    type: Number,
    optional: false,
    defaultValue: 0
  },
  amount: {
    type: Number,
    optional: false,
    defaultValue: 0
  },
  transactionType: { // maps to enum
    type: Number,
    optional: false,
    defaultValue: 0
  },
  parentId: {
    type: Number,
    optional: false
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: Date.now()
  }
});

Transaction.attachSchema(transactionSchema);

// Was thinking of having us write our own schema/validator package but then I got lazy.
// We can discuss this later if you want to. I think it might be cool.
// ProductSchema = {
//   description: {
//     type: String,
//     allowNull: false
//   },
//   price: {
//     type: Number,
//     allowNull: false
//   },
//   itemLookUpCode: {
//     type: Number,
//     allowNull: false
//   },
//   itemType: {
//     type: Number,
//     allowNull: false,
//     isEnum: true,
//     default: 0
//   },
//   quantity: {
//     type: Number,
//     allowNull: false,
//     default: 0
//   },
//   reorderPoint: {
//     type: Date,
//     allowNull: true
//   },
//   restockLevel: {
//     type: Number,
//     allowNull: false,
//     default: 0
//   },
//   parentItem: {
//     type: Number,
//     allowNull: false,
//     default: 0
//   },
//   extendedDescription: {
//     type: String,
//     allowNull: true
//   },
//   isActive: {
//     type: Boolean,
//     allowNull: false,
//     default: true
//   },
//   msrp: {
//     type: Number,
//     allowNull: false,
//     dafault: 0.00
//   },
//   createdAt: {
//     type: Date,
//     allowNull: false,
//     default: Date.now()
//   }
// }

/*
  ItemLookupCode -> lookupcode
  Price
  ItemType -> 0 = Normal, 1 = Serialized, 2 = Matrix; others can be ignored
  Cost
  Quantity
  ReorderPoint
  RestockLevel
  ParentItem
  ExtendedDescription
  Inactive -> active
  MSRP
  DateCreated -> createdon
*/
