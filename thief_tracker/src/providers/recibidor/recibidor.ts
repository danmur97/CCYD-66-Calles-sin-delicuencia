import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
// import { AdminZonaAProvider } from '../admin-zona-a/admin-zona-a';
import { ZonaA } from '../../models/zonaA';
import { AdminZonaAProvider } from '../admin-zona-a/admin-zona-a';
import { DebugToastProvider } from '../debug-toast/debug-toast';
/*
  Generated class for the RecibidorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecibidorProvider {
  private afList: AngularFireList<any>;
  
  constructor(public http: HttpClient, private afDB: AngularFireDatabase, 
    private zona:AdminZonaAProvider, private console:DebugToastProvider) {
    console.log('Hello RecividorProvider Provider');
    this.init();
  }
  init(){
    this.console.log('Receiver init');
    this.afList = this.afDB.list('alarmas');
    
    this.afList.stateChanges(['child_added']).subscribe(
      item =>{
        this.console.log2('Receiver detected: added data');
        console.log(item);
        console.log('-------------');

        let zA = new ZonaA(item.payload.val());
        zA.set_id(item.key);
        this.zona.ext_recepcionZonaA(zA);
      }
    );
    this.afList.stateChanges(['child_removed']).subscribe(
      item =>{
        this.console.log2('Receiver detected: removed data');
        console.log(item);
        console.log('-------------');

        let zA = new ZonaA(item.payload.val());
        zA.set_id(item.key);
        this.zona.ext_eliminarZonaA(zA);
      }
    );
  }
}
