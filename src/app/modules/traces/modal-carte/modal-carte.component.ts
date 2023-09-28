import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-carte',
  templateUrl: './modal-carte.component.html',
  styleUrls: ['./modal-carte.component.css']
})
export class ModalCarteComponent {
  latitude: number;
  longitude: number;
  afficherModal: boolean = true;

  fermerCarte() {
    this.afficherModal = false;
  }
}
