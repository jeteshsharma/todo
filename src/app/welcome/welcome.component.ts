import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../services/data/welcome-data.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Welcome'
  name = "default"

  welcomeMessageFromService: String

  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    // console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleSuccessfulResponse(error)
    )

  }

  handleSuccessfulResponse(response) {

    this.welcomeMessageFromService = response.message

  }

  handleErrorResponse(error) {

    this.welcomeMessageFromService = error.error.message

  }
}
