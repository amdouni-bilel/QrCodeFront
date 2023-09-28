import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AssignService {
  URL_BASE = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  addUsersToProject(choix: any, selectedEmployees: any): Observable<any> {
    const addBody = {
      'project': {
        'idpro': choix
      },
      'list': selectedEmployees
    };

    return this.http.post(this.URL_BASE + '/projectsdone/UsersProject', addBody);
  }

  project: any[] = [
    // Remplissez cette liste avec les données des projets.
  ];

  employee: any[] = [
    // Remplissez cette liste avec les données des employés.
  ];

}
