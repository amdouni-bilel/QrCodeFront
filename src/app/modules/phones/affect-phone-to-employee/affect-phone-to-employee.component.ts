import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PhoneService} from "../../../shared/services/phone.service";
import {UserService} from "../../../shared/services/user.service";
import Swal from "sweetalert2";
import {Phone} from "../../../shared/models/phone";
import {User} from "../../../shared/models/user";

@Component({
  selector: 'app-affect-phone-to-employee',
  templateUrl: './affect-phone-to-employee.component.html',
  styleUrls: ['./affect-phone-to-employee.component.css']
})
export class AffectPhoneToEmployeeComponent {
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
      this.phoneService.assignPhoneToEmployee(idPhone , idEmployee ).subscribe(
        (response) => {
          // Traitez la réponse de l'API comme nécessaire
          console.log('Affectation réussie :', response);
          // Redirigez l'utilisateur vers une autre page ou effectuez d'autres actions nécessaires
          this.router.navigate(['/autre-page']);
        },
        (error) => {
          console.error('Erreur lors de l\'affectation :', error);
          // Gérez l'erreur comme nécessaire
        }
      );
    }
 /*   if (this.updateForm.valid) {
      const idEmployee = this.employee_id.value;
    const idPhone = this.getId;
    console.log(idEmployee , 'idEmployee')
    console.log(idPhone , "idPhone")
    this.phoneService.assignPhoneToEmployee(this.getId, idEmployee).subscribe((data) => {
      console.log(data , 'data updatetd')
      console.log("Phone update succes")
      Swal.fire('Phone Updated Successfully!', '', 'success')
      this.router.navigateByUrl('/phone/all')
    })
    },
    (error) => {
      console.error('Erreur lors de l\'affectation :', error);
      // Gérez l'erreur comme nécessaire
    }

  /!*  this.phoneService.assign(this.getId,this.val1).subscribe(
      res => {
        this.toastr.success("Phone assigned successfully to Employee")
        this.modal.hide();

      }
    )*!/*/
  }

  onSubmit() {

  }
}
