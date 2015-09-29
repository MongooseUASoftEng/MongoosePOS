Employees = new Mongo.Collection("employees");

var employeeSchema = new SimpleSchema({
	firstName: {
		type: String,
		optional: false
	},
	lastName: {
		type: String,
		optional: false
	},
	employeeId: {
		type: Number,
		optional: false
	},
	isActive: {
		type: Boolean,
		optional: false
	},
	classification: { //this will map to an enum
		type: Number,
		optional: false,
		defaultValue: 0
	},
	manager: {
		type: String,
		optional: true
	},
	password: {
		type: String,
		optional: false
	},
	createdAt: {
		type: Date,
		optional: false
	}
});

Employees.attachSchema(employeeSchema);
