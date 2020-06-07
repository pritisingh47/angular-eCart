import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Products} from 'src/app/models/products';
import {cartUrl} from 'src/app/config/app-congif';
import {Observable} from 'rxjs';
import {CartItem} from 'src/app/models/cart-item';
import{ map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addProductToCart(productItem: Products){
    return this.http.post(cartUrl, {productItem})
  }

  getProductFromCart(): Observable<CartItem[]>{
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[])=>{
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
  }
}
