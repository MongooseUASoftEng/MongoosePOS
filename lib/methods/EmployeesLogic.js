Meteor.methods({
  insertEmployee: function (employee) {
    employees.insert({
      firstName: employee.firstName,
      lastName: employee.lastName,
      employeeId: Number(employee.employeeId),
      isActive: true,
      classification: enumManager.map('classification', employee.classification),
      manager: employee.manager,
      password: employee.password,
      createdAt: Date.now()
    });
  }
});
