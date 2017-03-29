import { Product } from './product';
import { PROD } from './mock-products';
import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

    product: FirebaseListObservable<any[]>;

    af:AngularFire;

    getProduct():FirebaseListObservable<any[]>{
         return this.af.database.list('/products');
    }
}