import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {ToastService} from 'src/app/service/toast.service';
import { Observable,Subject } from 'rxjs';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: Observable<firebase.User>;

  subject = new Subject<string>();


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
      var username = this.angularFireAuth.auth.currentUser.email.split('@')[0];
      window.localStorage.setItem('username',username);
      this.subject.next('loginsuccess');
      //this.toastService.show('You are loggedIn successfully !!');
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
  
  isUserLoggedIn(): Observable<string>{
    return this.subject.asObservable();
  }
}
