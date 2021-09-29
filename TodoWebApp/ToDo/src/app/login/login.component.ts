import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'admin'
  password = ''
  errorCredentials = 'The credentials are wrong! Try again.'
  invalidLogin = false


  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) {
  }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log(this.username)
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true
    }
  }
}
