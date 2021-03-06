import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from './../services/hardcoded-authentication.service'
import { BasicAuthenticationService } from '../services/basic-authentication.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "magma"
  password = "mailman"

  errorMessage = "Invalid credentials"
  invalidLogin = false

  constructor(private router: Router,
    public hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  // handleLogin() {
  //   if (this.hardcodedAuthenticationService.authenticate(this.username,
  //     this.password)) {
  //     this.invalidLogin = false
  //     this.router.navigate(['welcome', this.username])
  //   }
  //   else this.invalidLogin = true

  // }

  handleBasicAuthLogin() {
    this.basicAuthenticationService.executeAuthenticationService(this.username,
      this.password).subscribe(
        data => {
          console.log(data)
          this.invalidLogin = false
          this.router.navigate(['welcome', this.username])
        },
        error => {
          console.log(error)
          this.invalidLogin = true
        })

  }

}
