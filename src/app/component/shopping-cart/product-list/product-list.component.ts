import { Component, OnInit } from '@angular/core';
import {ProductListService} from 'src/app/service/product-list.service';
import {Products} from 'src/app/models/products';
import {WishlistService} from 'src/app/service/wishlist.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Products[]=[];
  wishlistProductIds = [];
  constructor(private productService: ProductListService,
    private wishlistService:WishlistService) { }

  ngOnInit() {
    this.getProductist();
    this.getWishlist();
  }

  getProductist(){
    this.productService.getProducts().subscribe(product =>{
      console.log(product)
      this.products = product
    });
  }

  getWishlist(){
    this.wishlistService.getWishlist().subscribe((l_wishlistProductIds)=>{
      console.log(l_wishlistProductIds)
      this.wishlistProductIds = l_wishlistProductIds;
    })
  }
}
