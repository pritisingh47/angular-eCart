import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/models/products';
import { MessangerService } from 'src/app/service/messanger.service';
import { CartService } from 'src/app/service/cart.service';
import {WishlistService} from 'src/app/service/wishlist.service';
import {BehaviorSubject} from 'rxjs';
import {ToastService} from 'src/app/service/toast.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Products;

  @Input() addedToWishlist:boolean;


  constructor(private msg: MessangerService,
    private cartService: CartService,
    private wishlistService:WishlistService,
    private toastService: ToastService) { }

  ngOnInit() {
  }

  handleAddToCart() {
    //console.log('handleToart:', this.productItem)
   this.toastService.show('Product added successfully!');
   this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem);
      
    })

  }

  addToWishlist() {
    this.wishlistService.addToWishlist(this.productItem.id).subscribe(()=>{
      this.addedToWishlist = true;
    })
  }

  removeFromWishlist(){
    this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(()=>{
      this.addedToWishlist = false;
    })
  }

  
}
