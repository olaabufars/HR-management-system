

function Employee(EmployeeID,FullName,Department, level ){
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.level = level;
    this.Salary = 0;
    Employee.lis.push(this);
   
    
}
Employee.lis = [];
Employee.totalAdministration = [];
Employee.totalMarketing = [];
Employee.totalFinance =[];
Employee.totalDevelopment = [];

const employee2 = new Employee(1001,"Lana Ali","Finance","Senior");
const employee3 = new Employee(1002,"Tamara Ayoub","Marketing","Senior");
const employee4 = new Employee(1003,"Safi Walid","Administration","Mid-Senior");
const employee5 = new Employee(1004,"Omar Zaid","Development","Senior");
const employee6 = new Employee(1005,"Rana Saleh","Development","Junior");
const employee7 = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");



function setData(){
    let Data = JSON.stringify(Employee.lis);
    localStorage.setItem('employee',Data);
}

function getData(){
    let jsoData = localStorage.getItem('employee');
    let parsData = JSON.parse(jsoData);
    if(parsData !== null){
        Employee.lis
    }

}
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
Employee.prototype.sumDepartment=function(){
if(this.Department ==="Administration"){
    totalAdministration.push(this.Department);

} else if(this.Department === "Marketing"){
    totalMarketing.push(this.Department);
}    else if(this.Department == "Development"){
    totalDevelopment.push(this.Department);
}else{
    totalFinance.push(this.Department);
}

}
    Employee.prototype.render = function(){


        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        table.appendChild(thead);
        table.appendChild(tbody);
        document.getElementById('body').appendChild(table);
        let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = "Department";
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = "#of employee";
        let heading_3 = document.createElement('th');
        heading_3.innerHTML = "Total salary";
        let heading_4 = document.createElement('th');
        heading_4.innerHTML = "Avarge";
        row_1.appendChild(heading_1);
        row_1.appendChild(heading_2);
        row_1.appendChild(heading_3);
        row_1.appendChild(heading_4);
        thead.appendChild(row_1);
    
        let row_2 = document.createElement('tr');
        let row_2_data_1 = document.createElement('td');
        row_2_data_1.innerHTML = "Administration";
        let row_2_data_2 = document.createElement('td');
        row_2_data_2.innerHTML = `${this.totalAdministration}`;
        let row_2_data_3 = document.createElement('td');
        row_2_data_3.innerHTML = `${this.Salary}`;
        let row_2_data_4 = document.createElement('td');
        row_2_data_4.innerHTML = "*";
        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        row_2.appendChild(row_2_data_4);
        thead.appendChild(row_2);
    
        let row_3 = document.createElement('tr');
        let row_3_data_1 = document.createElement('td');
        row_3_data_1.innerHTML = "Marketing";
        let row_3_data_2 = document.createElement('td');
        row_3_data_2.innerHTML = `${this.EmployeeID}`;
        let row_3_data_3 = document.createElement('td');
        row_3_data_3.innerHTML = `${this.Salary}`;
        let row_3_data_4 = document.createElement('td');
        row_3_data_4.innerHTML = "*";
        row_3.appendChild(row_3_data_1);
        row_3.appendChild(row_3_data_2);
        row_3.appendChild(row_3_data_3);
        row_3.appendChild(row_3_data_4);
        thead.appendChild(row_3);
    
    
    
    
    
        let row_4 = document.createElement('tr');
        let row_4_data_1 = document.createElement('td');
        row_4_data_1.innerHTML = "Development";
        let row_4_data_2 = document.createElement('td');
        row_4_data_2.innerHTML = `${this.EmployeeID}`;
        let row_4_data_3 = document.createElement('td');
        row_4_data_3.innerHTML = `${this.Salary}`;
        let row_4_data_4 = document.createElement('td');
        row_4_data_4.innerHTML = "*";
        row_4.appendChild(row_4_data_1);
        row_4.appendChild(row_4_data_2);
        row_4.appendChild(row_4_data_3);
        row_4.appendChild(row_4_data_4);
        thead.appendChild(row_4);
    
    
    
    
        let row_5 = document.createElement('tr');
        let row_5_data_1 = document.createElement('td');
        row_5_data_1.innerHTML = "Finance";
        let row_5_data_2 = document.createElement('td');
        row_5_data_2.innerHTML = `${this.EmployeeID}`;
        let row_5_data_3 = document.createElement('td');
        row_5_data_3.innerHTML = `${this.Salary}`;
        let row_5_data_4 = document.createElement('td');
        row_5_data_4.innerHTML = "*";
        row_5.appendChild(row_5_data_1);
        row_5.appendChild(row_5_data_2);
        row_5.appendChild(row_5_data_3);
        row_5.appendChild(row_5_data_4);
        thead.appendChild(row_5);
    
    
    
    
        let row_6 = document.createElement('tr');
        let row_6_data_1 = document.createElement('td');
        row_6_data_1.innerHTML = "Total";
        let row_6_data_2 = document.createElement('td');
        row_6_data_2.innerHTML = "*";
        let row_6_data_3 = document.createElement('td');
        row_6_data_3.innerHTML = "*";
        let row_6_data_4 = document.createElement('td');
        row_6_data_4.innerHTML = "*";
        row_6.appendChild(row_6_data_1);
        row_6.appendChild(row_6_data_2);
        row_6.appendChild(row_6_data_3);
        row_6.appendChild(row_6_data_4);
        thead.appendChild(row_6);

    }
 

employee4.sumDepartment()
   
        


    

