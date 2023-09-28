import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Project} from "../../../shared/models/project";
import {UserService} from "../../../shared/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../../shared/services/project.service";

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  updateForm: FormGroup;
  getId: any
  project: Project

  constructor(public projectService: ProjectService, public route: ActivatedRoute, public router: Router) {}

  ngOnInit(): void {
    this.getId = this.route.snapshot.params['id'];
    console.log(this.getId, 'aaaaa')
    this.projectService.getProjectById(this.getId).subscribe((data: any) => {
      this.nom?.patchValue(data.nom)
      this.description?.patchValue(data.description)
    })

    this.updateForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    })
  }
  get nom() {  return  this.updateForm.get('nom')  }
  get description() { return this.updateForm.get('description') }

  get f() { return this.updateForm.controls;  }

  onUpdate() {
  this.projectService.updateProject(this.getId, this.updateForm.value).subscribe((data) => {
      console.log("project update succes")
      Swal.fire('Project Updated Successfully!', '', 'success')
      this.router.navigateByUrl('/project/all')
    })

  }
}
