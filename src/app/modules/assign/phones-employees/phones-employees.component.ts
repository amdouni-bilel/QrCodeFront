import { Component } from '@angular/core';
import {Phone} from "../../../shared/models/phone";
import {PhoneService} from "../../../shared/services/phone.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-phones-employees',
  templateUrl: './phones-employees.component.html',
  styleUrls: ['./phones-employees.component.css']
})
export class PhonesEmployeesComponent {
  phones: Phone[] ;
  constructor(public phoneService: PhoneService) {

  }


  ngOnInit(): void {
    // const date = new Date(); // Obtenez la date actuelle ou votre date à formater
    // const formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy');
    this.phoneService.getAllPhones().subscribe((data: any)=>{
      this.phones = data;
      console.log(this.phones , "list phones");
    });
  }

/*  deleteAssignPhoneToEmployee(){
    this.phoneService.DeleteAssignPhoneToEmployee(id , employee_id).subscribe(res => {
      this.phones = this.phones.filter(item => item.idtel !== id);
      console.log('Phone deleted successfully!'); })

  }*/

/*  deleteAssignPhoneToEmployee(phoneId: number) {
    // Vous devez obtenir l'ID de l'employé associé à ce téléphone si nécessaire
    // Vous pouvez l'obtenir à partir des données dans le tableau "phones" ou de votre API

    const employeeId = 1; // Remplacez par la manière dont vous obtenez l'ID de l'employé

    // Appelez votre API pour supprimer l'affectation
    this.phoneService.DeleteAssignPhoneToEmployee(phoneId, employeeId).subscribe(
      (response) => {
        // Traitez la réponse de l'API comme nécessaire
        console.log('Suppression de l\'affectation réussie :', response);

        // Actualisez la liste des téléphones après la suppression si nécessaire
       // this.loadPhoneData(); // Appelez une fonction pour recharger les données

      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'affectation :', error);
        // Gérez l'erreur comme nécessaire
      }
    );
  }*/
  deleteuser(i,x)
  {

    this.phoneService.deleteassign(i,x).subscribe(
      res => {
        //a verifier
        this.ngOnInit();
      //  this.toastr.success("Assign removed successfuly")
      }
    )}

  deletePhone(id){
    Swal.fire({
      title: "Are you want to remove Phone ?", text: "You will not be able to recover this Phone",
      icon: 'warning', showCancelButton: true, confirmButtonText: 'yes Delete it', cancelButtonText: 'No Keep it' })
      .then((res)=>{
        console.log(res)
        if(res.isConfirmed){
          this.phoneService.deletePhone(id).subscribe(res => {
            this.phones = this.phones.filter(item => item.idtel !== id);
            console.log('Phone deleted successfully!'); })
          Swal.fire('Phone Deleted Successfully!', '', 'success')
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
}
