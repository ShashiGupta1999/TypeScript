//Write a TypeScript program that creates type aliases for complex data types such as objects or custom types. Use them to define variables. 

type Person = {
    name: string;
    age: number;
};
 
type Company = {
    companyName: string;
    employees: Person[];
};
 
let employee1: Person = {
    name: "Shashi",
    age: 24
};
 
let employee2: Person = {
    name: "Suman",
    age: 19
};
 
let myCompany: Company = {
    companyName: "HclTech",
    employees: [employee1, employee2]
};
 
// Display company details
console.log("Company Name: " + myCompany.companyName);
console.log("Employees:");
myCompany.employees.forEach((employee, index) => {
    console.log(`Employee ${index + 1}:`);
console.log(` Name: ${employee.name}`);
    console.log(`  Age: ${employee.age}`);
});