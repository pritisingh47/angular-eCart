import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthenticationService} from 'src/app/service/authentication.service';


function matchPassword(form) {
  const password = form.get('password')
  const confirmPassword = form.get('confirmPassword')

  //console.log(password.value, confirmPassword.value)
  if(password.value != confirmPassword.value) {
   confirmPassword.setErrors({ matchPassword: true })
  } else {
    return null;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  signUpForm: any;


  constructor(private fb : FormBuilder,
    private authService:AuthenticationService) { 
    //console.log('Regiser component loaded')
    
  }

  ngOnInit() {
   this.buildForm()
  }
  
  buildForm(){
    /*this.signUpForm = this.fb.group({
      name:['',Validators.required],
      username: ['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',Validators.required]
    },{validators: matchPassword})*/
    this.signUpForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]]
    })
  }
  register(){
    console.log(this.signUpForm.value)
    console.log('email ',this.signUpForm.get('email').value)
    this.authService.SignUp(
      this.signUpForm.get('email').value,
      this.signUpForm.get('password').value
    )
  }

}
