tenderEntries = new Mongo.Collection("tenderEntries");


var tenderEntrySchema = new SimpleSchema({
	amount : {
		type: number,
		optional: false
		
		},
	
	tenderType : {
		type: String,
		optional: false
		
	recordID : {
		type: number,
		optional: false
		
		},
		
	transactionID : {
		type: number,
		optional: false
		
		},
		
	productID : {
		type: number,
		optional: false
		
		},
		
	timestamp : {
		type: Date,
		optional: false
		defaultValue: Date.now()
		}
});

tenderEntries.attachSchema(tenderEntrySchema);		
		

	
