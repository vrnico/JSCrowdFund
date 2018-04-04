
import { Injectable } from '@angular/core';
import { Cause } from './cause.model';
import { CAUSES } from './mock-causes';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CauseService {
  causes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.causes = database.list('causes');
  }

  getCauses(){
    return this.causes;
  }

  addCause(newCause: Cause) {
    this.causes.push(newCause);
  }

  getCauseById(causeId: string){
    return this.database.object('causes/' + causeId);
  }

}
