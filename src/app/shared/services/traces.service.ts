import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TracesService {
  URL_BASE = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAllTraces(){
    return this.http.get<any>(this.URL_BASE  +'/projects/alltraces' );

  }
}
