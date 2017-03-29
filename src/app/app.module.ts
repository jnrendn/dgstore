import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';


import { AppComponent } from './app.component';

import { firebaseConfig } from './../environments/firebase.config';
import { ProductService } from './products/product.service';
import { ProductComponent } from './products/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
