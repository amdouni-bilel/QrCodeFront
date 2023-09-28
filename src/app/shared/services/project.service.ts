import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
export interface Food {
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  URL_BASE = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  getAllProj(){

    return this.http.get<any>(this.URL_BASE +'/projects' );

  }

  addProject(project): Observable<String> {
    return <Observable<String>>this.http.post(this.URL_BASE + '/projects/create', project);
  }

  deleteProject(id: number) {
    return <Observable<any>> this.http.delete(this.URL_BASE +  '/projects/' + id);

  }

  getFoods(): Food[] {
    return [
      {
        id: 1,
        name: 'Grapes '
      },
      {
        id: 2,
        name: 'Melon 🍈'
      },
      {
        id: 3,
        name: 'Watermelon 🍉'
      },
      {
        id: 4,
        name: 'Tangerine 🍊'
      }
    ];
  }

  getFoodsAsync() {
/*    const url = this.url;
    return this.http.get(url).pipe(map((response: any) => {
      return response.map((i: any) => ({
        id: i.id,
        name: i.title
      } as Item)) as Item[]
    }));*/
  }










  addEmployee(employee){
    return this.http.post(this.URL_BASE+'/persons/new', employee)
  }



  deleteuser(id: number) {
   // return <Observable<any>> this.http.delete(this.URL_BASE + this.URL_USER + '/' + id);

  }



  getProjectById(id){
    return this.http.get(this.URL_BASE+'/projects/projet/'  +id);
  }

  updateProject(id , project){
    return this.http.put(this.URL_BASE+'/projects/upproj/' +id, project)
  }


  ///////////////////////////

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
}
