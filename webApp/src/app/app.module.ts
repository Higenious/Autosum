import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home.component';
import { AboutusComponent } from './aboutus.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ProductService } from './services/product.service';
 import { PlaceOrderComponent} from './place-order/place-order.component';


const appRoutes: Routes = [
  { path: 'home',       component: HomeComponent },
  { path: 'aboutus',    component: AboutusComponent },
  { path: 'addproduct', component: AddProductComponent },
  { path: 'inventory', component: ViewProductComponent },
  { path: 'placeorder', component: PlaceOrderComponent },
  { path: 'store', component: HomeComponent },  ];



@NgModule({
  declarations: [ AppComponent,NavbarComponent,PlaceOrderComponent,AboutusComponent, HomeComponent, AddProductComponent, ViewProductComponent],
  imports: [BrowserModule,RouterModule.forRoot(appRoutes), HttpModule,
    FormsModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
