import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {Project} from "../../../shared/models/project";
import {ProjectService} from "../../../shared/services/project.service";
import Swal from "sweetalert2";
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-home-project',
  templateUrl: './home-project.component.html',
  styleUrls: ['./home-project.component.css']
})
export class HomeProjectComponent implements OnInit {
  projects: Project[];
  idpro :any;
  qrCodeValue ="";
  date : any;
  qrCodeUrl: any;
  constructor(public projectService: ProjectService) {}


  ngOnInit(): void {
    this.getAllEmployees()

    this.qrCodeValue = this.idpro + '_' + this.date;

  }

  getAllEmployees() {
    // const date = new Date(); // Obtenez la date actuelle ou votre date à formater
    // const formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy');
    this.projectService.getAllProj().subscribe((data: any) => {
      this.projects = data;
      console.log(this.projects);
    });
  }

  deleteProject(id){
     Swal.fire({
       title: "Are you want to remove Project ?", text: "You will not be able to recover this Project",
       icon: 'warning', showCancelButton: true, confirmButtonText: 'yes Delete it', cancelButtonText: 'No Keep it' })
       .then((res)=>{
         console.log(res)
         if(res.isConfirmed){
           this.projectService.deleteProject(id).subscribe(res => {
             this.projects = this.projects.filter(item => item.idpro !== id);
             console.log('Project deleted successfully!'); })
           Swal.fire('Project Deleted Successfully!', '', 'success')
         }
       })
   }

  exportExcel() {
    /*    let workbook = new Workbook();
        let worksheet = workbook.addWorksheet('ProductSheet');

        worksheet.columns = [
          { header: 'Id', key: 'id', width: 10 },
          { header: 'Name', key: 'name', width: 32 },
          { header: 'Detail', key: 'detail', width: 10},
        ];

        this.projects.forEach(e => {
          worksheet.addRow({id: e.id, name: e.name, detail:e.detail},"n");
        });

        workbook.xlsx.writeBuffer().then((data) => {
          let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
          fs.saveAs(blob, 'ProjectData.xlsx');
        })*/

  }

  /*generateQRCode(projectId: any) {
    const currentDate = new Date().toLocaleDateString();
    const data = `Projet ID: ${projectId}, Date: ${currentDate}`;

    QRCode.toDataURL(data, (err, url) => {
      if (!err) {
        // 'url' contient l'URL de l'image QR générée
        this.qrCodeUrl = url;
      }
    });
  }*/
  employee: any;

  generateQRCodeData(idpro: number): string {
    const currentDate = new Date().toISOString(); // Obtenez la date actuelle au format ISO
    return `ID du projet : ${idpro}, Date de création : ${currentDate}`;
  }



  generateQRCode(idpro: number) {
    const currentDate = new Date().toLocaleDateString();
    const data = `Projet ID: ${idpro}, Date: ${currentDate}`;

    QRCode.toDataURL(data, (err, url) => {
      if (!err) {
        // 'url' contient l'URL de l'image QR générée
        this.qrCodeUrl = url;
      }
    });
  }
}
