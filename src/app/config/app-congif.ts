import { environment } from '../../environments/environment';

export const baseUrl = environment.production ? 'http://localhost:4200' : 'http://localhost:3000'

export const productUrl = baseUrl + '/products';
export const cartUrl = baseUrl + '/carts';
export const wishlistUrl = baseUrl + '/wishlist';