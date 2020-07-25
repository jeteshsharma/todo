import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


export class HelloWorldBean {
  constructor(public message: String) {
  }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldServiceWithPathVariable(name) {

    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader()

    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/path-variable/${name}`, { headers: header })

  }

  createBasicAuthenticationHttpHeader() {
    let username = 'magma'
    let password = "mailman"
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString
  }
}
