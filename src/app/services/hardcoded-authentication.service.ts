import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username == "magma" && password == "mailman") {
      sessionStorage.setItem('authenticatedUser', username)
      return true
    }
    else return false
  }

  isLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)

  }

  logout() {
    sessionStorage.removeItem("authenticatedUser")
  }
}
