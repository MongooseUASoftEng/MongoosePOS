Meteor.methods({
  insertEmployee: function (employee) {
    employees.insert({
      firstName: employee.firstName,
      lastName: employee.lastName,
      employeeId: Number(employee.itemLookUpCode),
      isActive: Boolean(employee.isActive),
      classification:  employee.classification,
      manager: employee.manager,
      password: employee.password,
      createdAt: Date(employee.createdAt)
    },
    
    // This is a part of the collection2 validation package.
    function (error, result) {
      // There are some corrupt entries in the csv.
      if (error) {
        //console.log("Error inserting employee.");
        throw error;
      }
    });
  }
});
