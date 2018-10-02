import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
// import { AdminZonaAProvider } from '../admin-zona-a/admin-zona-a';
import { ZonaA } from '../../models/zonaA';
import { AdminZonaAProvider } from '../admin-zona-a/admin-zona-a';
/*
  Generated class for the RecibidorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecibidorProvider {
  private afList: AngularFireList<any>;
  constructor(public http: HttpClient, private afDB: AngularFireDatabase, private zona:AdminZonaAProvider) {
    console.log('Hello RecividorProvider Provider');
  }
  init(){
    this.afList = this.afDB.list('alarmas');
    // this.afList.snapshotChanges(['child_added']).subscribe(
    this.afList.stateChanges(['child_added']).subscribe(
      item =>{
        let zA = new ZonaA(item.payload.val());
        zA.set_id(item.key);
        this.zona.ext_recepcionZonaA(zA);
        this.newObj_listener(zA);
      }
    );
    // this.afList.snapshotChanges(['child_removed']).subscribe(
    this.afList.stateChanges(['child_removed']).subscribe(
      item =>{
        let zA = new ZonaA(item.payload.val());
        zA.set_id(item.key);
        this.zona.ext_eliminarZonaA(zA);
        this.deletedObj_listener(zA);
      }
    );
  }
  newObj_listener(item:any){
    console.log('Added data!');
    console.log(item);
    console.log('-------------');
  }
  deletedObj_listener(item:any){
    console.log('Removed data!');
    console.log(item);
    console.log('-------------');
  }
}
