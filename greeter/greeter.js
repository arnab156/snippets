var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// let user = "Jane User"; //must pass string because of assignment. 
// let user = { firstName: "Jane", lastName: "User" };
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
//TERMINAL: tsc greeter.ts
