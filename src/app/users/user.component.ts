import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'my-user',
    templateUrl: './user.component.html'

})

export class UserComponent {
    users: FirebaseListObservable<any[]>;

    constructor(af:AngularFire){
    this.users= af.database.list('/users');
    console.log(this.users)
  }

}