import {RouterModule,Route} from '@angular/router';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from 'src/app/component/register/register.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import {CartComponent} from 'src/app/component/shopping-cart/cart/cart.component';
import { ProductListComponent } from './component/shopping-cart/product-list/product-list.component';

export const routes: Route[]=[
    
    {path:'',component:ShoppingCartComponent,pathMatch:'full'},
    {path:'shop',component:ShoppingCartComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path: 'showCartItem',component: CartComponent},
    {path: 'showProducts',component:ProductListComponent},
    {path:'**',component:PageNotFoundComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}