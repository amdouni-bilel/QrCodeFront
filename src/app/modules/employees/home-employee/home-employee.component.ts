import { Component } from '@angular/core';
import {Phone} from "../../../shared/models/phone";
import {UserService} from "../../../shared/services/user.service";
import {User} from "../../../shared/models/user";
import Swal from "sweetalert2";
import {Workbook} from "exceljs";
import * as fs from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-home-employee',
  templateUrl: './home-employee.component.html',
  styleUrls: ['./home-employee.component.css']
})
export class HomeEmployeeComponent {
  users: User[] ;
  constructor(public projectService: UserService) {

  }


  ngOnInit(): void {
    // const date = new Date(); // Obtenez la date actuelle ou votre date à formater
    // const formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy');
    this.projectService.getAllUsers().subscribe((data: any)=>{
      this.users = data;
      console.log(this.users , "list phones");
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

  /*exportExcel() {
      let workbook = new Workbook();
        let worksheet = workbook.addWorksheet('ProductSheet');

        worksheet.columns = [
          { header: 'Id', key: 'username', width: 10 },
         // { header: 'Name', key: 'nom', width: 32 },
      //   { header: 'Detail', key: 'prenom', width: 10},
        ];

        this.users.forEach(e => {
          worksheet.addRow({username: e.username},"n");
        });

        workbook.xlsx.writeBuffer().then((data) => {
          let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
          fs.saveAs(blob, 'ProjectData.xlsx');
        })

  }*/

  exportExcel(): void {
    // Créez un tableau de données avec les en-têtes et les données des employés
    const data: any[][] = [
      ['nom', 'prenom', 'username'], // En-têtes
      ...this.users.map(user => [user.nom, user.prenom, user.username]) // Données des employés
    ];

    // Créez un objet WorkBook avec une WorkSheet
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);

    // Créez un objet WorkBook
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Employees'); // Le nom de la feuille Excel

    // Générez le contenu du fichier Excel sous forme de blob
    // @ts-ignore
    const blob: Blob = XLSX.write(wb, { bookType: 'blob', type: 'blob' });

    // Créez un objet URL pour le blob
    const url: string = URL.createObjectURL(blob);

    // Créez un élément d'ancre pour le téléchargement du fichier
    const a: HTMLAnchorElement = document.createElement('a');
    a.href = url;
    a.download = 'employees.xlsx'; // Nom du fichier Excel

    // Déclenchez le clic de l'élément d'ancre pour lancer le téléchargement
    document.body.appendChild(a);
    a.click();

    // Libérez l'URL et supprimez l'élément d'ancre
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

}

