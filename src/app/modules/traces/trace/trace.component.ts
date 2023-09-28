import { Component } from '@angular/core';
import {ProjectService} from "../../../shared/services/project.service";
import {TracesService} from "../../../shared/services/traces.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ModalCarteComponent} from "../modal-carte/modal-carte.component";

@Component({
  selector: 'app-trace',
  templateUrl: './trace.component.html',
  styleUrls: ['./trace.component.css']
})
export class TraceComponent {
  traces: any;
  public latitudeModal: number;
  public longitudeModal: number;
  public afficherModal: boolean = false;
  //qrCodeUrl: any;


  constructor(public tracesService: TracesService , private modalService: NgbModal) {}


  ngOnInit(): void {
    this.getAllTraces()
  }

  getAllTraces() {
    this.tracesService.getAllTraces().subscribe((data: any) => {
      this.traces = data;
      console.log(this.traces);
    });
  }

  exportExcel() {}

  afficherCarte(latitude: any, longitude: any) {
    const modalRef = this.modalService.open(ModalCarteComponent);
    modalRef.componentInstance.latitude = latitude;
    modalRef.componentInstance.longitude = longitude;
    console.log('rrrrrrr')
  }

  afficherCarte1() {
   // this.latitudeModal = latitude;
  //  this.longitudeModal = longitude;
    this.afficherModal = true;
  }

  fermerCarte() {
    this.afficherModal = false;
  }
}
