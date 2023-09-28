import {Component, ElementRef, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public showPassword: boolean;
  public showPasswordOnPress: boolean;
  textColor: any;
  buttonNavigation: any;
  // KeenThemes mock, change it to:
  defaultAuth: any = {
    email: 'admin@demo.com',
    password: 'demo',
  };
  loginForm: FormGroup;
  hasError: boolean;
  returnUrl: string;
  isLoading$: Observable<boolean>;
  @ViewChild('passwd') password: ElementRef;
  svgUrl: string;
  clicked: boolean;
  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
  messageError: string;

  isLoggedin?: boolean;

  emailnotverifiedlink: boolean;
  userg: any;
  messageSuccess: any;
  auth: any;
  user1: {
    id: number;
    username: string;
    password: string;
    children: any[];
    email: string;
    tokens: any;
    pic: string;
    client_id: number;
    client_secret: string;
    first_name: string;
    last_name: string;
    gender: string;
    birthday: string;
    url: string;
  };
  userNew: {
    id: number;
    username: string;
    password: string;
    have_children: boolean;
    email: string;
    pic: string;
    client_id: number;
    client_secret: string;
    tokens: any;
    firstname: string;
    lastname: string;
    gender: string;
    birthday: string;
    url: string;
    roles: any[];
    occupation: string;
    companyName: string;
    phone: string;
    address: string;
    socialNetworks: string;
    website: string;
    language: string;
    timeZone: string;
    communication: { email: boolean; sms: boolean; phone: boolean };
  };
  New: {
    id: number;
    username: string;
    password: string;
    have_children: boolean;
    email: string;
    pic: string;
    client_id: number;
    client_secret: string;
    tokens: any;
    firstname: string;
    lastname: string;
    gender: string;
    birthday: string;
    url: string;
    roles: any[];
    occupation: string;
    companyName: string;
    phone: string;
    address: string;
    socialNetworks: string;
    website: string;
    language: string;
    timeZone: string;
    communication: { email: boolean; sms: boolean; phone: boolean };
  };

  subscriptions: Subscription[] = [];
  updateSubscription: Subscription;
  serv: Subscription;

  load = true;
  // @HostBinding('id')
  // class = `menu  menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-100px `;
  //@HostBinding('attr.data-kt-menu') dataKtMenu = 'true';
  itemClass: string = 'ms-1 ms-lg-3';
  btnClass: string =
    'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px';
  userAvatarClass: string = 'symbol-35px symbol-md-40px';

  btnIconClass: string = 'svg-icon-1';
  invalid: boolean = false;
  role: string;
  child: any;

  submit() {

  }

  loginWithG2() {

  }

  loginWithF2() {

  }
}
