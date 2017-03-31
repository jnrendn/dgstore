import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
    selector:'my-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent {
    product: FirebaseListObservable<any[]>;
    prod: FirebaseListObservable<any[]>;
   

    constructor(public af:AngularFire){
    this.product= af.database.list('/products');

    console.log(this.product)
  }
  method(a:any, pc:number, k: any):void {
    if(pc > 0){
    alert('valor: $'+a);
      this.prod = this.af.database.list(`/products`);
      this.prod.update(k, { productCant:pc-1 });
    }else{
      alert('Producto agotado');
    }
  }
}
