import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username, password) {
    if (username == "magma" && password == "mailman") {
      sessionStorage.setItem('authenticatedUser', username)
      return true
    }
    else return false
  }

  executeAuthenticationService(username, password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);



    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, { headers: header })
      .pipe(
        map(
          data => {

            sessionStorage.setItem('authenticatedUser', username)
            return data;
          }
        )
      )

  }



  isLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)

  }

  logout() {
    sessionStorage.removeItem("authenticatedUser")
  }
}

export class AuthenticationBean {
  constructor(private message: String) {

  }
}
