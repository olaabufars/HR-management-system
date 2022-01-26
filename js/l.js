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
/*
function Employee(FullName,Department, level,img){
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.level = level;
    this.img = img;
    this.cardNum = 0;
}

;


Employee.prototype.GitRandomId = function(min,max){
    this.cardNum = GitRandomNumber(min,max);}


function GitRandomNumber(min,max){
    return Math.floor(min + Math.random() * max);
}

let EmployeeForm =document.getElementById("form");
EmployeeForm.addEventListener('submit', getData(event));
 


function getData(event){
    event.preventDefault()
    let name = event.target.fname.value;
    let ImgURL = event.target.IMG.value;
    let Department1 = document.getElementById("Dpartment").value;
    let level1 = document.getElementById("Level").value;
   // new Employee(,name,ImgURL,Department1,level1);
}
let myFormSection = document.getElementById("sectionId");
let myForm = document.getElementById("form");
myFormSection.appendChild(myForm);

Employee.prototype.render = function(){
    
    let name = document.getElementById("fname");
    name.appendChild(myForm);
    let Department = document.getElementById("Dpartment");
    Department.appendChild(myForm);
    let option1 = document.getElementById("Administration");
    option1.appendChild(Department);
    let option2 = document.getElementById("Marketing");
    option2.appendChild(Department);
    let option3 = document.getElementById("Development");
    option3.appendChild(Department);
    let option4 = document.getElementById("Finance");
    option4.appendChild(Department);

    let level = document.getElementById("Level");
    level.appendChild(myForm);
    let option11 = document.getElementById("Junior");
    option11.appendChild(level);
    let option22 = document.getElementById("Mid-Senior");
    option22.appendChild(level);
    let option33 = document.getElementById("Senior");
    option33.appendChild(level);

    let img = document.getElementById("IMAGID");
    img.appendChild(myForm);


    



  
}


Employee.prototype.GetInfo = function(){
    this.FullName = getData();
}
*////////////////////////////////////////////Task9///////////////////////////////////////////////////////////////

function Employee(EmployeeID,FullName,Department, level ){
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.level = level;
    this.Salary = 0;
    Employee.lis.push(this);
   
    
}
Employee.lis = [];
const employee1 = new Employee(1000,"Ghazi Samer","Administration","Senior");
const employee2 = new Employee(1001,"Lana Ali","Finance","Senior");
const employee3 = new Employee(1002,"Tamara Ayoub","Marketing","Senior");
const employee4 = new Employee(1003,"Safi Walid","Administration","Mid-Senior");
const employee5 = new Employee(1004,"Omar Zaid","Development","Senior");
const employee6 = new Employee(1005,"Rana Saleh","Development","Junior");
const employee7 = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");

//console.log(Employee.lis);


function setData(){
    let Data = JSON.stringify(Employee.lis);
    localStorage.setItem('employee',Data);
}


