import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  readonly APIUrl = 'http://localhost:8080/hello-world-bean';

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(){
    return this.http.get(this.APIUrl);
  }

  executeHelloWorldServiceWithPath(){
    return this.http.get(`http://localhost:8080//hello-world/path-variable/${name}`);
  }
}