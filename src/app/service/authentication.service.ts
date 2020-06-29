import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {ToastService} from 'src/app/service/toast.service';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: Observable<firebase.User>;

  constructor(private angularFireAuth:AngularFireAuth,
    private toastService:ToastService,
    private router: Router) { 
      this.userData=angularFireAuth.authState;
    }

  SignUp(email: string,password:string){
    this.angularFireAuth
    .auth
    .createUserWithEmailAndPassword(email,password)
    .then(res=>{
      //console.log('succesfully siged up!!',res)
      this.toastService.show('You are registered successfully !!');
      this.router.navigateByUrl('/login');
    })
    .catch(error=>{
      console.log('something is wrong!!',error.message)
    })
  }

  SignIn(email:string,password:string){
    this.angularFireAuth
    .auth
    .signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.toastService.show('You are loggedIn successfully !!');
      this.router.navigateByUrl('/');
    })
    .catch(error=>{
      console.log('something went wrong!',error.message)
    })
  }

  SignOut() {
    this.angularFireAuth
    .auth
    .signOut();
    }
}
