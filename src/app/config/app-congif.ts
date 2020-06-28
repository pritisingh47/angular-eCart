import { environment } from '../../environments/environment';

export const baseUrl = environment.production ? 'https://angular-ecart.firebaseio.com/' : 'https://angular-ecart.firebaseio.com/'

export const productUrl = baseUrl + '/products.json';
export const cartUrl = baseUrl + '/carts.json';
export const wishlistUrl = baseUrl + '/wishlist.json';