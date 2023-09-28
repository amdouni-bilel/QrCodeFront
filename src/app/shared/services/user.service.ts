import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_BASE = environment.apiBaseUrl;
  URL_BASEONLINE = environment.apiBaseUrlOnline;
  URL_USER = '/persons';
  ADD_USER = '/new';
  URL_USER2 = '/users/all';

  URL_PHONE = '/mobiles';
  ADD_PHONE = '/create'
  URL_PROJECTS = '/projects';
  ADD_PROJ = '/create';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

//#############Employee###############//
  addEmployee(employee){
    return this.http.post(this.URL_BASE+'/persons/new', JSON.stringify(employee), this.httpOptions)
  }

  getAllUsers(){

    return this.http.get<any>(this.URL_BASE +this.URL_USER );

  }

  deleteuser(id: number) {
    return <Observable<any>> this.http.delete(this.URL_BASE + this.URL_USER + '/' + id);

  }



  getEmployeeById(id){
    return this.http.get(this.URL_BASE+'/persons/'  +id);
  }

  updateEmployee(id , employee:any){
    return this.http.put(this.URL_BASE+'/persons/upuserr/' +id, employee)
  }
//#############Employee###############//


  routeToGo = '/';
  constructor(private http: HttpClient) { }

 // helper = new JwtHelperService ();
  currentUser: any = null;
  setUserToGo(route: string) {
    this.routeToGo = route;
  }




  newuser(nom , username): Observable<String> {
    const addBody = {
      'nom': nom,
      'username': username
    } ;


    return <Observable<String>>this.http.post(this.URL_BASE + this.URL_USER + this.ADD_USER , addBody);
  }





  deleteassign(n,x){
    let oo =''

    return <Observable<String>>this.http.put(this.URL_BASE + "/mobiles/del"    + '/'  + n + '/' + x ,oo);



  }



  getAll(){

    return this.http.get<any>(this.URL_BASE + "/projectsdone/all" );

  }



  getAllTraces(){
    return this.http.get<any>(this.URL_BASE +this.URL_PROJECTS +'/alltraces' );

  }

  getAllUsers2(){

    return this.http.get<any>(this.URL_BASE +this.URL_USER2 );

  }





  /*mobiles */




  deletephone(id: number) {
    return <Observable<any>> this.http.delete(this.URL_BASE + this.URL_PHONE + '/' + id);

  }

  newphone(nom , num): Observable<String> {
    const addBody = {
      'nom': nom,
      'num': num
    } ;


    return <Observable<String>>this.http.post(this.URL_BASE + this.URL_PHONE + this.ADD_PHONE, addBody);
  }



  getAllPhones(){

    return this.http.get<any>(this.URL_BASEONLINE +this.URL_PHONE );

  }






  /* projects */




  deleteproj(id: number) {
    return <any> this.http.delete(this.URL_BASE + this.URL_PROJECTS + '/' + id);

  }

  newproj(nom , desc): Observable<String> {
    const addBody = {
      'nom': nom,
      'description': desc
    } ;


    return <Observable<String>>this.http.post(this.URL_BASE + this.URL_PROJECTS + this.ADD_PROJ, addBody);
  }






  assign(idtel: any , iduser: any ) {

    let oo =''

    return <any> this.http.put(this.URL_BASE + this.URL_PHONE + '/'  + idtel + '/' + iduser ,oo);

  }




  getById(id){
    return this.http.get(this.URL_BASE+'projects/upproj/'  +id);
  }

  update(id:any, project){
    return this.http.put(this.URL_BASE +'projects/upproj/' , project)
  }

  upuser(nom , prenom): Observable<String> {
    const addBody = {
      'nom': nom,
      'prenom': prenom
    } ;
    return <Observable<String>>this.http.put(this.URL_BASE + this.URL_USER, addBody);
  }




  ///////////////////////////Assign ////////::
  addUsersToProject(choix : any ,list: any ) {
    const addBody = {
      'project': {
        "idpro": choix
      },
      'list': list
    } ;
    return <Observable<any>> this.http.post(this.URL_BASE + "/projectsdone/UsersProject" , addBody);

  }

  getProjectsEmployees(){
    return this.http.get<any>(this.URL_BASE + "/projectsdone/all" );
  }

  deleteuserproj(idpro , idperson) {
    const addBody = {
      'person': {
        idperson : idperson
      },
      'project': {
        idpro : idpro
      }
    }
    return <Observable<String>>this.http.post(this.URL_BASE + "/projectsdone/status" ,addBody);
  }

}
