import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

//fire base
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';

//components
import { ProductsComponent } from './componets/products/products.component';
import { ProductsListComponent } from './componets/products/products-list/products-list.component';
import { Product} from './models/product';


//services
import {ProductService} from './services/product.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsListComponent,
    Product
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
