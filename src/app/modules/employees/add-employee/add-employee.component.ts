import { Component } from '@angular/core';
import Swal from "sweetalert2";
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../../../shared/models/user";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  AddTaskForm: FormGroup;
  project: any = [];

  constructor(private router: Router, private userService: UserService, private fb: FormBuilder) {

    this.AddTaskForm = this.fb.group({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required]),
    });
  }

  get f() { return this.AddTaskForm.controls; }

  ngOnInit(): void { }

  submit() {
    console.log( "add consolllll")
    this.userService.addEmployee(this.AddTaskForm.value).subscribe(
      (result) => {
        Swal.fire("Success" , 'Employee Created Successfly' , 'success');
      },
      (error) => {
        Swal.fire("Error" ,'Email exist' , 'error');
      },
      () => {
        this.AddTaskForm.reset();
        this.router.navigate(['employees/all']);
      })
    /*    this.userService.addEmployee(this.AddTaskForm.value).subscribe(data => {
          console.log(data , "add consolllll")
          Swal.fire('Project Created Successfully!', '', 'success')
          this.router.navigate(['/employee/all'])
        });*/
  }

}
