import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
    selector:'my-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent {
    product: FirebaseListObservable<any[]>;
   

    constructor(af:AngularFire){
    this.product= af.database.list('/products');
    console.log(this.product)
  }
  method(a:any):void {
      alert('valor: $'+a);
  }

    // getProduct():void{
    //     this.product =this.productService.getProduct()
    // }

    // ngOnInit():void{
    //     this.getProduct();
    //     console.log(this.product);
    // }

    // setCant(id:number, band:boolean):void {
    //     console.log(id);
    //     for(let i = 0; i < this.product.length; i++){
    //         if(band == true){
    //             if(this.product[i].id == id && this.product[i].productCant != 0){
    //                 this.product[i].productCant -= 1;
    //                 break;  
    //             }
    //         }else {
    //             if(this.product[i].id == id){
    //                 this.product[i].productCant += 1;
    //                 break;
    //             }  
    //         }
    //     }
    // }

}
