//Write a TypeScript program that creates type aliases for complex data types such as objects or custom types. Use them to define variables. 
var employee1 = {
    name: "Shashi",
    age: 24
};
var employee2 = {
    name: "Suman",
    age: 19
};
var myCompany = {
    companyName: "HclTech",
    employees: [employee1, employee2]
};
// Display company details
console.log("Company Name: " + myCompany.companyName);
console.log("Employees:");
myCompany.employees.forEach(function (employee, index) {
    console.log("Employee ".concat(index + 1, ":"));
    console.log(" Name: ".concat(employee.name));
    console.log("  Age: ".concat(employee.age));
});
