import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../Model/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  //baseapiurl it is variable of type string
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }//talk to api need httpclient


  //to talk our .net api call getallemployee() method
  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees');
    // api/employees this is come from api url and Employee is our model name
  }
  //return type is observable
  addEmployee(addEmployeeRequest: Employee): Observable<Employee>{
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';//empty guid
    return this.http.post<Employee>(this.baseApiUrl + '/api/employees',addEmployeeRequest )
  }
  getEmployee(id: string): Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl + '/api/employees/' +id)
  }

  updateEmployee(id: string,  updateEmployeeRequest: Employee): Observable<Employee>{
    return this.http.put<Employee>(this.baseApiUrl + '/api/employees/' + id,  updateEmployeeRequest);
  }
  deleteEmployee(id: string): Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl + '/api/employees/' + id);
  }
}


