import { Component, OnInit } from '@angular/core';
import {CartService} from 'src/app/service/cart.service'
import {AuthenticationService} from 'src/app/service/authentication.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  count = 0;
  showButton:boolean=true;
  userLoggedIn:boolean=false;
  username: string=null;

  constructor(private cartService: CartService,
    public authService: AuthenticationService,
    private router: Router) { 

    this.authService.isUserLoggedIn().subscribe(res=> 
      {
        this.userLoggedIn = true;
        this.username = window.localStorage.getItem('username');
      });

    this.cartService.initializeCartItem();
    cartService.cartItemCount.subscribe(x=> {this.count = x})
  }

  ngOnInit() {
  }

  signOut (){
    this.authService.SignOut();
    this.userLoggedIn=false;
    window.localStorage.setItem('username','');
    this.router.navigateByUrl('/');
  }
}
