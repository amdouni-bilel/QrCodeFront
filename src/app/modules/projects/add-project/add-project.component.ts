import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../shared/services/user.service";
import Swal from "sweetalert2";
import {Project} from "../../../shared/models/project";
import {ProjectService} from "../../../shared/services/project.service";
import * as QRCode from 'qrcode';
import * as L from 'leaflet';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  AddTaskForm: FormGroup;
  project: any = [];
   idProject: any;
  private map;
   latitude: any;
   longitude: any;

  constructor(private router: Router, private projectService: ProjectService, private fb: FormBuilder) {

    this.AddTaskForm = this.fb.group({
      nom: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      latitude: new FormControl('', [Validators.required]),
      longitude: new FormControl('', [Validators.required]),
    });
  }

  get f() { return this.AddTaskForm.controls; }

  ngOnInit(): void { }

  ///////////////////
  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.map.on('click', (e) => {
      this.latitude = e.latlng.lat;
      this.longitude = e.latlng.lng;
      console.log('Latitude : ' + this.latitude);
      console.log('Longitude : ' + this.longitude);
    });
  }

    submit() {
      const formData = this.AddTaskForm.value;
      formData.latitude = this.latitude;
      formData.longitude = this.longitude;

      this.projectService.addProject(formData).subscribe(
      (result) => {
      //  this.generateQRCode(this.idProject)
        Swal.fire("Success" , 'Project Created Successfly' , 'success');
      },
      (error) => {
        Swal.fire("Error" ,'Check input fields' , 'error');
      },
      () => {
        this.AddTaskForm.reset();
        this.router.navigate(['project/all']);
      })


     /* try {
        // Ajoutez le projet
        const project = this.AddTaskForm.value;
        const projectResult = await this.projectService.addProject(project).toPromise();

        // Générez le code QR
        // @ts-ignore
        await this.generateQRCode(projectResult.idpro); // Supposons que projectResult contient l'ID du projet créé.

        // Affichez une confirmation de succès
        Swal.fire("Succès", 'Projet créé avec succès', 'success');

        // Réinitialisez le formulaire et naviguez vers la liste des projets
        this.AddTaskForm.reset();
        this.router.navigate(['project/all']);
      } catch (error) {
        Swal.fire("Erreur", 'Vérifiez les champs dentrée', 'error');
      }*/


  }

  generateQRCode(projectId: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const currentDate = new Date().toLocaleDateString();
      const data = `Projet ID: ${projectId}, Date: ${currentDate}`;

      QRCode.toDataURL(data, (err, url) => {
        if (!err) {
          // Stockez l'URL de l'image QR générée si nécessaire.
          // Vous pouvez également laisser cette étape pour afficher l'image plus tard.

          resolve(); // Résolvez la promesse une fois que le code QR est généré avec succès.
        } else {
          reject(err); // Rejetez la promesse en cas d'erreur.
        }
      });
    });
  }



/*  private initMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.map.on('click', (e) => {
      console.log('Latitude : ' + e.latlng.lat);
      console.log('Longitude : ' + e.latlng.lng);
    });
  }*/


}
