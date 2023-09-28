import {Component, OnInit} from '@angular/core';
import {Project} from "../../../shared/models/project";
import {UserService} from "../../../shared/services/user.service";
import {Phone} from "../../../shared/models/phone";
import {PhoneService} from "../../../shared/services/phone.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-home-phone',
  templateUrl: './home-phone.component.html',
  styleUrls: ['./home-phone.component.css']
})
export class HomePhoneComponent implements OnInit {
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
