import { Component, OnInit } from '@angular/core';
import {CartService} from 'src/app/service/cart.service'
import {AuthenticationService} from 'src/app/service/authentication.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  count = 0;
  showButton:boolean=true;
  userLoggedIn:boolean=false;

  constructor(private cartService: CartService,
    public authService: AuthenticationService) { 
    this.cartService.initializeCartItem();
    cartService.cartItemCount.subscribe(x=> {this.count = x})
  }

  ngOnInit() {
  }

  
}
