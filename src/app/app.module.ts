import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './component/shared/nav/nav.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { CartComponent } from './component/shopping-cart/cart/cart.component';
import { FiltersComponent } from './component/shopping-cart/filters/filters.component';
import { ProductListComponent } from './component/shopping-cart/product-list/product-list.component';
import { CartItemComponent } from './component/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './component/shopping-cart/product-list/product-item/product-item.component';

import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import {AppRoutingModule} from 'src/app/app-routing.module';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    CartComponent,
    FiltersComponent,
    ProductListComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
