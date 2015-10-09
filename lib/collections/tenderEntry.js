TenderEntries = new Mongo.Collection("tenderEntries", {
	transform: function (tenderEntry) {
		tenderEntry.tenderType = enumManager.map('tenderType', tenderEntry.tenderType);

		return tenderEntry;
	}
});

var tenderEntrySchema = new SimpleSchema({
	amount: {
		type: Number,
		optional: false
	},
	tenderType: {
		type: Number,
		optional: false
	},
	transactionID: {
		type: Number,
		optional: false
	},
	productID: {
		type: Number,
		optional: false
	},
	createdAt: {
		type: Date,
		optional: false,
		defaultValue: Date.now()
	}
});

TenderEntries.attachSchema(tenderEntrySchema);
