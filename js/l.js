//Employee ID

//Full Name

//Department:
function Employee(EmployeeID,FullName,Department, level ){
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.level = level;
   
    
}
const employee1 = new Employee(1000,"Ghazi Samer","Administration","Senior");

const employee2 = new Employee(1001,"Lana Ali","Finance","Senior");



var salarytax;
Employee.prototype.CalculatSalary= function(){
if(this.level === "Senior"){
    min = 1500;
    max = 2000;
    this.Salary =Math.random() * (max - min) + min;
    salarytax =(this.Salary*7.5);
}
else if(this.level === "Mid-Senior"){
    min = 1000;
    max = 1500;
    this.Salary =Math.random() * (max - min) + min;
    salarytax =(this.Salary*7.5);
}
else{
    min = 500;
    max = 1000;
    this.Salary =Math.random() * (max - min) + min;
    salarytax =(this.Salary*7.5);

}
}
//var gitReturn = employee1.CalculatSalary();

Employee.prototype.render = function(){
    document.write(`<h1>${this.EmployeeID}  ${this.FullName}     ${this.Department}  ${this.level}    ${this.CalculatSalary()} </h1>`)
}
employee1.render();
//employee2.render();
