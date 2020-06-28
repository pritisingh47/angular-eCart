import { Injectable } from '@angular/core';
import {Products} from 'src/app/models/products';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {productUrl} from 'src/app/config/app-congif';
import {AngularFireDatabase} from 'angularfire2/database';

//const apiUrl="http://localhost:3000/products";
const firebaseDbUrl="https://angular-ecart.firebaseio.com/";
@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  products: Products[]=[
    /*new Products(1,'Product1','This is a wider product1 with supporting text below as a natural lead-i',100,'https://www.kameswarijewellers.com/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/d/3/d33a9470_earing_1.jpg'),
    new Products(2,'Product2','This is a wider product2 with supporting text below as a natural lead-i',100,'https://www.kameswarijewellers.com/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/d/3/d33a4272_earring_logo_1.jpg'),
    new Products(3,'Product3','This is a wider product3 with supporting text below as a natural lead-i',100,'https://www.kameswarijewellers.com/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/d/3/d33a9470_earing_1.jpg'),
    new Products(4,'Product4','This is a wider product4 with supporting text below as a natural lead-i',100,'https://www.kameswarijewellers.com/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/d/3/d33a9470_earing_1.jpg'),
    new Products(5,'Product5','This is a wider product5 with supporting text below as a natural lead-i',100,'https://www.kameswarijewellers.com/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/d/3/d33a9470_earing_1.jpg'),
    new Products(6,'Product6','This is a wider product6 with supporting text below as a natural lead-i',100,'https://www.kameswarijewellers.com/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/d/3/d33a9470_earing_1.jpg')
  */];
  constructor(private http: HttpClient) { 

    }

  getProducts(): Observable<Products[]>{
    //return this.products;
    //return this.http.get<Products[]>(productUrl);
    return this.http.get<Products[]>(productUrl);
  }
}
