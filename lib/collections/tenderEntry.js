TenderEntries = new Mongo.Collection("tenderEntries");


var tenderEntrySchema = new SimpleSchema({
	amount : {
		type: Number,
		optional: false
		},
	tenderType : {
		type: String,
		optional: false
		},
	recordID : {
		type: Number,
		optional: false
		},
	transactionID : {
		type: Number,
		optional: false
		},
	productID : {
		type: Number,
		optional: false
		},
	createdAt : {
		type: Date,
		optional: false,
		defaultValue: Date.now()
		}
});

TenderEntries.attachSchema(tenderEntrySchema);