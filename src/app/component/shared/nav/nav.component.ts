import { Component, OnInit } from '@angular/core';
import {CartService} from 'src/app/service/cart.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  count = 0;

  constructor(private cartService: CartService) { 
    this.cartService.initializeCartItem();
    cartService.cartItemCount.subscribe(x=> {this.count = x})
  }

  ngOnInit() {
  }

  
}
