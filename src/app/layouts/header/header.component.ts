import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  NomUser: any;
  isSignedIn!: boolean;
  constructor(
  //  private auth: AuthStateService,
   // public router: Router,
  //  public token: TokenService
  ) {}
  ngOnInit() : void{
  //  this.auth.userAuthState.subscribe((val) => {
  //    this.isSignedIn = val;
 //   });
 //   this.NomUser = localStorage.getItem("name");
  }

  // Signout
  signOut() {
  //  this.auth.setAuthState(false);
  // this.token.removeToken();
   // this.router.navigate(['login']);
  }

  GoToProfile() {
   // this.router.navigate(['profile']);

  }
}
