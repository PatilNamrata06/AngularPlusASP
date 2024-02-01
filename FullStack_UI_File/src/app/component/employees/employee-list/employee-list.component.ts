import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] =[]; //public property

  //injected employeeservice
  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
   this.employeesService.getAllEmployees()
   .subscribe({
    next: (employees)=>{
      this.employees = employees;
    },
    error: (response) => {
      console.log(response);
    }  
   })
  }
  // printThisPage(){
  //   window.print();
  // }
}
