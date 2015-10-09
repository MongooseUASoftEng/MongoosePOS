Employees = new Mongo.Collection("employees", {
	transform: function (employee) {
		employee.classification = enumManager.map('classification', employee.classification);

		return employee;
	}
});

var employeeSchema = new SimpleSchema({
	firstName: {
		type: String,
		optional: false
	},
	lastName: {
		type: String,
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
		optional: false,
    defaultValue: Date.now()
	}
});

Employees.attachSchema(employeeSchema);
