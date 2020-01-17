import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username :string  = 'cnu'
  password :string = 'pass123';
  invalidLogin :boolean = false
  invalidCredentials = 'Wrong username/password'

  // Dependency Injection
  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin(){
    // console.log(this.username)
    // console.log(this.password)

    if(this.username === 'cnu' && this.password === 'pass123'){
      this.invalidLogin  = false
      this.router.navigate(['welcome', this.username])
    }
    else {
      this.invalidLogin = true
    }
  }
}
