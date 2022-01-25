//Employee ID

//Full Name

//Department:
function Employee(EmployeeID,FullName,Department, level ){
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.level = level;
    this.Salary = 0;
   
    
}
const employee1 = new Employee(1000,"Ghazi Samer","Administration","Senior");

const employee2 = new Employee(1001,"Lana Ali","Finance","Senior");
const employee3 = new Employee(1002,"Tamara Ayoub","Marketing","Senior");
const employee4 = new Employee(1003,"Safi Walid","Administration","Mid-Senior");
const employee4 = new Employee(1004,"Omar Zaid","Development","Senior");
const employee4 = new Employee(1005,"Rana Saleh","Development","Junior");
const employee4 = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");




Employee.prototype.CalculatSalary= function(){
if(this.level === "Senior"){
    min = 1500;
    max = 2000;
    this.Salary =(Math.random() * (max - min) + min)*7.5;
}
else if(this.level === "Mid-Senior"){
    min = 1000;
    max = 1500;
    this.Salary =(Math.random() * (max - min) + min)*7.5;
}
else{
    min = 500;
    max = 1000;
    this.Salary =(Math.random() * (max - min) + min)*7.5;

}
}
//var gitReturn = employee1.CalculatSalary();

Employee.prototype.render = function(){
    document.write(`<h1>${this.EmployeeID}  ${this.FullName}     ${this.Department}  ${this.level}    ${this.Salary} </h1>`)
}
employee1.CalculatSalary();
employee1.render();
//employee2.render();
