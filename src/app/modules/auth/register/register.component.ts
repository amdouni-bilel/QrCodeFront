import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import * as L from 'leaflet';
import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscription,
  takeUntil,
} from 'rxjs';
import 'leaflet-routing-machine';
import { style } from '@angular/animations';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements  AfterViewInit{
  //////////////////////////ICONE sans IMAGE

  /*  private map: any;

    constructor() { }

    ngOnInit(): void {
      this.initMap();
      this.addRoute();
    }

    private initMap(): void {
      this.map = L.map('map').setView([51.505, -0.09], 13); // Coordonnées initiales et niveau de zoom

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
    }

    private addRoute(): void {
      const startPoint = L.latLng(51.505, -0.09); // Coordonnées du point de départ
      const endPoint = L.latLng(51.51, -0.1); // Coordonnées du point d'arrivée

      const route = L.Routing.control({
        waypoints: [
          startPoint,
          endPoint
        ]
      }).addTo(this.map);
    }
  }*/

//////////////////////////ICONE AVEC IMAGE
/*private map: any;

constructor() { }

ngOnInit(): void {
  this.initMap();
  this.addRoute();
}

private initMap(): void {
  this.map = L.map('map').setView([51.505, -0.09], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(this.map);
}

private addRoute(): void {
  const startPoint = L.latLng(51.505, -0.09);
  const endPoint = L.latLng(51.51, -0.1);

  const route = L.Routing.control({
    waypoints: [
      startPoint,
      endPoint
    ],
    routeWhileDragging: true
  }).addTo(this.map);

  // Personnalisation des icônes
  const departIcon = L.icon({
    iconUrl: 'assets/img/esprit.png',
    iconSize: [32, 32], // Taille de l'icône
    iconAnchor: [16, 32] // Point d'ancrage de l'icône
  });

  const arriveeIcon = L.icon({
    iconUrl: 'assets/img/devnet.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  });

  // Ajouter les marqueurs avec les icônes personnalisées
  L.marker(startPoint, { icon: departIcon }).addTo(this.map);
  L.marker(endPoint, { icon: arriveeIcon }).addTo(this.map);
}*/
///////////////////////
  ngAfterViewInit() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    L.Routing.control({
      waypoints: [
        L.latLng(51.5, -0.09),  // Point de départ
        L.latLng(51.51, -0.1), // Point d'arrivée
      ],
    }).addTo(map);
  }






}
