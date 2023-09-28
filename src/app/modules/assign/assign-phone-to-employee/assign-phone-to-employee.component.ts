import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../shared/models/user";
import {PhoneService} from "../../../shared/services/phone.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../shared/services/user.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-assign-phone-to-employee',
  templateUrl: './assign-phone-to-employee.component.html',
  styleUrls: ['./assign-phone-to-employee.component.css']
})
export class AssignPhoneToEmployeeComponent {
  updateForm: FormGroup;
  getId: any
  project: User
  employee: any;

  constructor(public phoneService: PhoneService,
              public route: ActivatedRoute,
              public router: Router,
              public projectService: UserService) {}

  ngOnInit(): void {
    this.projectService.getAllUsers().subscribe((data: any)=>{
      this.employee = data;
      console.log(this.employee , "list phones");
    });

    this.getId = this.route.snapshot.params['id'];
    console.log(this.getId, 'aaaaa')
    this.phoneService.getPhoneById(this.getId).subscribe((data: any) => {
      this.nom?.patchValue(data.nom)
      this.num?.patchValue(data.num)
    })

    this.updateForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      num: new FormControl('', [Validators.required]),
      employee_id: new FormControl('', [Validators.required]),
    })
  }
  get nom() {  return  this.updateForm.get('nom')  }
  get num() { return this.updateForm.get('num') }
  get employee_id() { return this.updateForm.get('employee_id') }

  get f() { return this.updateForm.controls;  }

  onUpdate() {
    if (this.updateForm.valid) {
      const idEmployee = this.employee_id?.value;
      const idPhone = this.getId;

      // Appelez votre API pour effectuer l'affectation
      // Après avoir appelé votre API pour l'affectation
      this.phoneService.assignPhoneToEmployee(idPhone , idEmployee ).subscribe(
        () => {
          // Redirigez l'utilisateur vers la page appropriée après l'affectation réussie
          this.router.navigate(['/assign/phone-employees']);
        },
        (error) => {
          console.error('Erreur lors de l\'affectation :', error);
          // Gérez l'erreur comme nécessaire
        }
      );
     // this.router.navigate(['/']);


    }
  }

  onSubmit() {

  }
}
