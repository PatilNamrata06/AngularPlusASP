import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/Model/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails: Employee ={
    id:'',
    name:'',
    email:'',
    phone: 0,
    salary: 0,
    department:''
  };

  constructor(private route: ActivatedRoute, private employeeServive:
     EmployeesService,private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
       const id= params.get('id');
       if (id){
        this.employeeServive.getEmployee(id)
        .subscribe({
          next: (response)=>{
            this.employeeDetails = response;
          }
        })
       }
      }
    })
  }
  updateEmployee(){
    this.employeeServive.updateEmployee(this.employeeDetails.id, this
      .employeeDetails)
      .subscribe({
        next: (response) =>{
          this.router.navigate(['employees']);
        }
      });
  }
  deleteEmployee(id: string){
    this.employeeServive.deleteEmployee(id)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['employees']);
      }
    });
  }
}
