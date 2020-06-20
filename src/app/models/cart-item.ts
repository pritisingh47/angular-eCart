import {Products} from 'src/app/models/products';

export class CartItem {
    id: number
    productId: number
    productName: string
    price: number
    qty: number
    imageUrl: string

    constructor(id: number,product: Products, qty=1){
        this.id = id;
        this.productId = product.id;
        this.productName = product.name;
        this.price = product.price;
        this.qty = qty
        this.imageUrl = product.imageUrl;
    }
}
