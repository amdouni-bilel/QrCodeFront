import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProjectService} from "../../../shared/services/project.service";
import Swal from "sweetalert2";
import {Phone} from "../../../shared/models/phone";
import {PhoneService} from "../../../shared/services/phone.service";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent {
  AddTaskForm: FormGroup;
  project: any = [];
  employee: any = [];

  constructor(private router: Router,
              private phoneService: PhoneService,
              private fb: FormBuilder,
              public projectService: UserService) {

    this.AddTaskForm = this.fb.group({
      nom: new FormControl('', [Validators.required]),
      num: new FormControl('', [Validators.required]),
      employee_id: new FormControl('', [Validators.required]),
    });
  }

  get f() { return this.AddTaskForm.controls; }

  ngOnInit(): void {
    this.projectService.getAllUsers().subscribe((data: any)=>{
      this.employee = data;
      console.log(this.employee , "list phones");
    });
  }

  submit() {
    console.log( "add consolllll")
    this.phoneService.addPhone(this.AddTaskForm.value).subscribe(
      (result) => {
        Swal.fire("Success" , 'Phone Created Successfly' , 'success');
      },
      (error) => {
        Swal.fire("Error" ,'Check input fields' , 'error');
      },
      () => {
        this.AddTaskForm.reset();
        this.router.navigate(['phone/all']);
      })
  }

}
