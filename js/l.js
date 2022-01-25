//Employee ID

//Full Name

//Department:
/*function Employee(EmployeeID,FullName,Department, level ){
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
const employee5 = new Employee(1004,"Omar Zaid","Development","Senior");
const employee6 = new Employee(1005,"Rana Saleh","Development","Junior");
const employee7 = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");




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
employee2.CalculatSalary();
employee2.render();
employee3.CalculatSalary();
employee3.render();
employee4.CalculatSalary();
employee4.render();
employee5.CalculatSalary();
employee5.render();
employee6.CalculatSalary();
employee6.render();
employee7.CalculatSalary();
employee7.render();*/
//////////////////////////////////// task8 ///////////////////////////////////////////////////////////////////

function Employee(EmployeeID,FullName,Department, level){
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.level = level;
    this.img = `./img/${this.FullName}.PNG`;
    this.cardNum = 0;
}


Employee.prototype.GitRandomId = function(min,max){
    this.cardNum = GitRandomNumber(min,max);}


function GitRandomNumber(min,max){
    return Math.floor(min + Math.random() * max);
}

let EmployeeForm =document.getElementById("form");
EmployeeForm.addEventListener('submit', getData);
function getData(event){
    event.preventDefault()
    let name = event.target.fname.value;
    let ImgURL = event.target.IMG.value;
    let Department1 = document.getElementById("Dpartment").value;
    let level1 = document.getElementById("Level").value;
    
}
Employee.prototype.render = function(){
    document.write(`<h3>${this.img}
    Name: ${this.FullName}- ID: ${this.EmployeeID}</h3><br><h4>Department: ${this.Department}-level: ${this.level}<br>${this.cardNum}</h4>`)
}


Employee.prototype.GetInfo = function(){
    this.FullName = getData();
}
const employee1 = new Employee(1000,"Ghazi Samer","Administration","Senior");
const employee2 = new Employee(1001,"Lana Ali","Finance","Senior");
const employee3 = new Employee(1002,"Tamara Ayoub","Marketing","Senior");
const employee4 = new Employee(1003,"Safi Walid","Administration","Mid-Senior");
const employee5 = new Employee(1004,"Omar Zaid","Development","Senior");
const employee6 = new Employee(1005,"Rana Saleh","Development","Junior");
const employee7 = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");

employee1.GitRandomId(1000,1500);
employee1.render();
employee2.GitRandomId(1600,2000);
employee3.GitRandomId(2001,3000);
employee4.GitRandomId(3001,4000);
employee5.GitRandomId(4001,5000);
employee6.GitRandomId(5001,6000);
employee7.GitRandomId(6001,7000);
