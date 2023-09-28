import { Component } from '@angular/core';
import Swal from "sweetalert2";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../shared/models/user";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  updateForm: FormGroup;
  getId: any
  project: User

  constructor(public userService: UserService, public route: ActivatedRoute, public router: Router) {}

  ngOnInit(): void {
    this.getId = this.route.snapshot.params['id'];
    console.log(this.getId, 'aaaaa')
    this.userService.getEmployeeById(this.getId).subscribe((data: any) => {
      this.nom?.patchValue(data.nom)
      this.prenom?.patchValue(data.prenom)
      this.username?.patchValue(data.username)
      this.mail?.patchValue(data.mail)
    })

    this.updateForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required]),
    })
  }
  get nom() {  return  this.updateForm.get('nom')  }
  get prenom() { return this.updateForm.get('prenom') }
  get username() { return this.updateForm.get('username') }
  get mail() { return this.updateForm.get('mail') }

  get f() { return this.updateForm.controls;  }

  onUpdate() {
    this.userService.updateEmployee(this.getId, this.updateForm.value).subscribe((data) => {
      console.log(data , 'data updatetd')
      console.log("Employee update succes")
      Swal.fire('Employee Updated Successfully!', '', 'success')
      this.router.navigateByUrl('/employees/all')
    })

  }

  submit() {

  }
}
