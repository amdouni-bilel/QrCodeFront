import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../shared/models/user";
import {PhoneService} from "../../../shared/services/phone.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../shared/services/user.service";
import {Project} from "../../../shared/models/project";
import {ProjectService} from "../../../shared/services/project.service";
import {AssignService} from "../../../shared/services/assign.service";
export interface Item {
  uuid?: string;
  id: number | null;
  name: string;
  checked?: boolean;
  visible?: boolean;
}
@Component({
  selector: 'app-assign-project-to-employee',
  templateUrl: './assign-project-to-employee.component.html',
  styleUrls: ['./assign-project-to-employee.component.css']
})
export class AssignProjectToEmployeeComponent {
  updateForm: FormGroup;
  getId: any
  employee: any;
  project: any;
  @ViewChild('employeeDropdown') employeeDropdown: ElementRef;
  choix:any;

  users : any;
  projects : any;

  dropdownList = [];
  searchItems = [];

  items: Item[] = [];
  showSearch = true;
  showError = false;
  showAll = true;
  showStatus = true;
  constructor(public phoneService: PhoneService,
              public route: ActivatedRoute,
              public router: Router,
              public userService: UserService,
              public projectService: ProjectService,
              public assignService: AssignService,
              ) {}

  ngOnInit(): void {
    this.items = this.projectService.getFoods().map(fruit => ({
      id: fruit.id,
      name: fruit.name
    } as Item));


    // Ajoutez le gestionnaire d'événements pour empêcher la fermeture automatique
  /*  this.employeeDropdown.nativeElement.addEventListener('click', (event) => {
      event.stopPropagation();
    });*/

    this.userService.getAllUsers().subscribe((data: any)=>{
      this.employee = data;
      console.log(this.employee , "list phones");
    });

    this.projectService.getAllProj().subscribe((data: any)=>{
      this.project = data;
      console.log(this.project , "list phones");
    });

    this.updateForm = new FormGroup({
      employee_id: new FormControl('', [Validators.required]),
      project_id: new FormControl('', [Validators.required]),
    })
  }
  get employee_id() { return this.updateForm.get('employee_id') }
  get project_id() { return this.updateForm.get('project_id') }

  get f() { return this.updateForm.controls;  }

  onUpdate() {
    // @ts-ignore
    const choix = this.updateForm.get('project_id').value;
    // @ts-ignore
    const selectedEmployees = this.updateForm.get('employee_id').value;

    this.assignService.addUsersToProject(choix, selectedEmployees).subscribe(
      response => {
        if (response && response.project && response.project.idpro === "") {
          // Traitez le cas où l'ID du projet est vide.
          console.log('Projet non sélectionné');
        } else if (response && response.list) {
          // Traitez le cas où l'ID du projet est défini et la liste d'employés est présente.
          console.log('Projet affecté avec succès', response);
        } else {
          // Traitez d'autres cas si nécessaire.
          console.error('Réponse API inattendue', response);
        }
      },
      error => {
        console.error('Erreur lors de l\'affectation du projet', error);
      }
    );
  }

  onSubmit() {

  }

  onItemChange($event: Item) {

  }
}
