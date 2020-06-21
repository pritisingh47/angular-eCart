import { Component, OnInit } from '@angular/core';
import { MessangerService } from 'src/app/service/messanger.service';
import { Products } from 'src/app/models/products';
import { CartService } from 'src/app/service/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0;

  cartItemCount = 0;

  constructor(private msg: MessangerService,
    private cartService: CartService) {
      this.cartService.initializeCartItem();
      cartService.cartItemCount.subscribe(x=> {this.cartItemCount = x})
     }

  ngOnInit() {
    this.loadItemFromCart();
    this.msg.getMsg().subscribe((product: Products) => {
      //this.addItemToCart(product);
      this.loadItemFromCart();
    })
  }

  //Fetching cart item from server
  loadItemFromCart() {
    this.cartService.getProductFromCart().subscribe((item: CartItem[]) => {
      this.cartItems = item;
      this.calculateCartTotal();
    })
  }


  /*addItemToCart(product: Products) {

    let itemAvailable = false;

    for (let i in this.cartItems){
      if(this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty ++;
        itemAvailable = true;
        break;
      }
    }
    
    if (!itemAvailable){
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
      
    }
    
    this.calculateCartTotal();
  }*/

  calculateCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
}
