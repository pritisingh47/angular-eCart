import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:any={};

  constructor(private authService: AuthenticationService) { 
    }

  ngOnInit() {
    
  }

  login(){
    this.authService.SignIn(this.model.email,this.model.password)
  }
}
