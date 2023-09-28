import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../shared/models/user";
import {UserService} from "../../../shared/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {PhoneService} from "../../../shared/services/phone.service";

@Component({
  selector: 'app-edit-phone',
  templateUrl: './edit-phone.component.html',
  styleUrls: ['./edit-phone.component.css']
})
export class EditPhoneComponent {
  updateForm: FormGroup;
  getId: any
  project: User

  constructor(public phoneService: PhoneService, public route: ActivatedRoute, public router: Router) {}

  ngOnInit(): void {


    this.getId = this.route.snapshot.params['id'];
    console.log(this.getId, 'aaaaa')
    this.phoneService.getPhoneById(this.getId).subscribe((data: any) => {
      this.nom?.patchValue(data.nom)
      this.num?.patchValue(data.num)
    })

    this.updateForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      num: new FormControl('', [Validators.required]),
    })
  }
  get nom() {  return  this.updateForm.get('nom')  }
  get num() { return this.updateForm.get('num') }

  get f() { return this.updateForm.controls;  }

  onUpdate() {
    this.phoneService.updatePhone(this.getId, this.updateForm.value).subscribe((data) => {
      console.log(data , 'data updatetd')
      console.log("Phone update succes")
      Swal.fire('Phone Updated Successfully!', '', 'success')
      this.router.navigateByUrl('/phone/all')
    })

  }

  submit() {

  }
}
