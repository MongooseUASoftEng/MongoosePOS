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
	classification: {
		type: String,
		optional: false
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
		optional: false,
		defaultValue: Date.now()
	}
});

Employees.attachSchema(employeeSchema);
