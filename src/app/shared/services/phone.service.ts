import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  URL_BASE = environment.apiBaseUrl;
  URL_BASEONLINE = environment.apiBaseUrlOnline;

  constructor(private http: HttpClient) { }

  getAllPhones(){
  //A verifier
      return this.http.get<any>(this.URL_BASE +'/mobiles' );
    //return this.http.get<any>(this.URL_BASEONLINE +'/mobiles' );

  }

  //A verifier
  deletePhone(id: number) {
   // return <Observable<any>> this.http.delete(this.URL_BASEONLINE + '/mobiles/' + id);
    return <Observable<any>> this.http.delete(this.URL_BASE + '/mobiles/' + id);
  }

  //A verifier
  addPhone(phone){
    //return this.http.post(this.URL_BASEONLINE+'/mobiles/create', phone)
    return this.http.post(this.URL_BASE+'/mobiles/create', phone)
  }

  getPhoneById(id){
    return this.http.get(this.URL_BASE+'/mobiles/phone/'  +id);
  }

  updatePhone(id , employee:any){
    return this.http.put(this.URL_BASE+'/mobiles/upmobile/' +id, employee)
  }

  affectPhoneToEmployee(id , employee:any){
  // return this.http.put(this.URL_BASE+'/mobiles/' +id + '/'+ employee)
  }

  assign(idtel: any , iduser: any ) {

    let oo =''

    return <any> this.http.put(this.URL_BASE + '/mobiles' + '/'  + idtel + '/' + iduser ,oo);

  }

  assignPhoneToEmployee(employeeId: number, phoneId: number): Observable<any> {
    const url = `${this.URL_BASE}/mobiles/${employeeId}/${phoneId}`;
    return this.http.put(url, {}); // Vous pouvez envoyer des données supplémentaires dans le corps de la requête si nécessaire
  }

  DeleteAssignPhoneToEmployee(employeeId: number, phoneId: number): Observable<any> {
    const url = `${this.URL_BASE}/mobiles/del/${employeeId}/${phoneId}`;
    return this.http.put(url, {}); // Vous pouvez envoyer des données supplémentaires dans le corps de la requête si nécessaire
  }

  deleteassign(n,x){
    let oo =''

    return <Observable<String>>this.http.put(this.URL_BASE + "/mobiles/del"    + '/'  + n + '/' + x ,oo);
  }
}
