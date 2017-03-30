import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent }     from './products/product.component';
import { UserComponent }        from './users/user.component';

const routes: Routes = [
    { path:'', redirectTo:'/product', pathMatch: 'full' },
    { path: 'product',  component: ProductComponent },
    { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}