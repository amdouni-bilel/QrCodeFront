import { Component } from '@angular/core';
import {User} from "../../../shared/models/user";
import {UserService} from "../../../shared/services/user.service";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-projects-employees',
  templateUrl: './projects-employees.component.html',
  styleUrls: ['./projects-employees.component.css'  ]
})
export class ProjectsEmployeesComponent {
  users: any[] ;
   qrCodeUrl: any;



  choix:any;
  searchItems = [];
  constructor(public projectService: UserService) {

  }


  ngOnInit(): void {
    // const date = new Date(); // Obtenez la date actuelle ou votre date à formater
    // const formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy');
    this.projectService.getProjectsEmployees().subscribe((data: any)=>{
      this.users = data;
      console.log(this.users , "list Projects Employees");
    });
  }

  deleteProject(id){
    Swal.fire({
      title: "Are you want to remove Employee ?", text: "You will not be able to recover this Employee",
      icon: 'warning', showCancelButton: true, confirmButtonText: 'yes Delete it', cancelButtonText: 'No Keep it' })
      .then((res)=>{
        console.log(res)
        if(res.isConfirmed){
          this.projectService.deleteuser(id).subscribe(res => {
            this.users = this.users.filter(item => item.idperson !== id);
            console.log('Employee deleted successfully!'); })
          Swal.fire('Employee Deleted Successfully!', '', 'success')
        }
      })
  }

  afficher(){
    this.projectService.addUsersToProject(this.choix , this.searchItems).subscribe(
      res => {
        console.log("Users assigned successfully")
      },
      error => {
        console.log(" assigned exit")
      }
    )
  }

  deleteusproj(idpro , idperson)
  {
    this.projectService.deleteuserproj(idpro , idperson).subscribe(
      res => {

        this.ngOnInit();
      //  this.toastr.success("Assign deleted successfuly")
      }
    )}


  /*  generateQRCodeData(idperson: number): string {
    const currentDate = new Date().toISOString(); // Obtenez la date actuelle au format ISO
    return `ID du projet : ${idperson}, Date de création : ${currentDate}`;
  }



  generateQRCode(projectId: number) {
    const currentDate = new Date().toLocaleDateString();
    const data = `Projet ID: ${projectId}, Date: ${currentDate}`;

    QRCode.toDataURL(data, (err, url) => {
      if (!err) {
        // 'url' contient l'URL de l'image QR générée
        this.qrCodeUrl = url;
      }
    });
  }*/
}

