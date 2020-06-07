import { Injectable } from '@angular/core';
import {wishlistUrl,productUrl,cartUrl} from 'src/app/config/app-congif';
import {HttpClient} from '@angular/common/http';
import { Products } from '../models/products';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  getWishlist(){
    return this.http.get<number[]>(wishlistUrl).pipe(
      map((result: any[])=>{
        let productId : number[] = [];
        result.forEach((item)=>{
          productId.push(item.id);
        })
        return productId;
      })
    )
  }

  addToWishlist(productId: number){
    return this.http.post(wishlistUrl, {id: productId})
  }

  removeFromWishlist(productId:number){
    return this.http.delete(wishlistUrl+'/'+productId);
  }
}
