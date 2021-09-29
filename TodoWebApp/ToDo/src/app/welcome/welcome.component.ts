import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  name = ''
  errorMessage = "";
  constructor(private route: ActivatedRoute, private welcomeService: WelcomeDataService) {

  }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    console.log(this.welcomeService.executeHelloWorldBeanService())
    this.welcomeService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse( response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: Object){
    console.log(response);
  }
  handleErrorResponse(error: string){
    this.errorMessage = error;
  }

}
