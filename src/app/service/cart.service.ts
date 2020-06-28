import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from 'src/app/models/products';
import { cartUrl } from 'src/app/config/app-congif';
import { Observable, BehaviorSubject } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = [];
  count = 0;

  cartItemCount = new BehaviorSubject(this.count);

  constructor(private http: HttpClient) { }

  addProductToCart(productItem: Products) {
    this.incrementCartItem();
    return this.http.post(cartUrl, {productItem})
  }
  incrementCartItem() {
    this.getProductFromCart().subscribe(x => {
      this.cartItems = x;
      this.count = this.cartItems.length;
      this.cartItemCount.next(++this.count);
    })

  }
  initializeCartItem() {
    this.getProductFromCart()
      .subscribe(x => {
        this.cartItems = x;
        this.count = this.cartItems.length;
        console.log('count : ',this.count)
        this.cartItemCount.next(this.count);
      })
  }

  getProductFromCart(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map(res  => {
        let response: any[]=[];
        let cartItems: CartItem[]=[];

        response = Object.keys(res).map((key) => { return res[key] });
        console.log(response)
        for (let item of response){
          //console.log('item from firebase: ',item)
          let itemAvailable = false;

          for (let i in cartItems){
            if(cartItems[i].productId === item.productItem.id) {
              cartItems[i].qty ++;
              itemAvailable = true;
              break;
            }
          }
          
          if (!itemAvailable){
            cartItems.push(new CartItem(item.id,item.productItem))
            
          }
          
        }
       
        return cartItems;
      })
    );
  }
  /*getProductFromCart(): Observable<CartItem[]>{
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[])=>{
        console.log(result);
        
        let cartItems: CartItem[]=[];

        for (let item of result){
          let itemAvailable = false;

          for (let i in cartItems){
            if(cartItems[i].productId === item.productItem.id) {
              cartItems[i].qty ++;
              itemAvailable = true;
              break;
            }
          }
          
          if (!itemAvailable){
            cartItems.push(new CartItem(item.id,item.productItem))
            
          }
          
        }
        return cartItems;
      })
    );
  }*/
}
