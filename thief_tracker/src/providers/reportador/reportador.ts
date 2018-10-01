import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AdminZonaAProvider } from '../admin-zona-a/admin-zona-a';
import { ZonaA } from '../../models/zonaA';
/*
  Generated class for the ReportadorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReporterProvider {
  private afList: AngularFireList<any>;
  private user = "Danmur";
  private last_key: string;
  constructor(private afDB: AngularFireDatabase, private zona: AdminZonaAProvider) {
    console.log('Hello ReporterProvider Provider');
    this.init();
  }
  init(){
    this.afList = this.afDB.list('alarmas');
    // this.afList.snapshotChanges(['child_added']).subscribe(
    this.afList.stateChanges(['child_added']).subscribe(
      item =>{
        this.zona.ext_recepcionZonaA(item.payload.val());
        this.newObj_listener(item);
      }
    );
    // this.afList.snapshotChanges(['child_removed']).subscribe(
    this.afList.stateChanges(['child_removed']).subscribe(
      item =>{
        this.zona.ext_eliminarZonaA(item.payload.val());
        this.deletedObj_listener(item);
      }
    );
  }
  add(za:ZonaA){
    this.afList.push(za);
  }
  remove(za:ZonaA){
    if(!(za.getid() === undefined)){
      this.afList.remove(za.getid());
    } else {
      throw "id is undefined";
    }
  }
  newObj_listener(item:any){
    console.log('Added data!');
    console.log(item);
    console.log('-------------');
    // if(item.payload.val().user == this.user){
    //   this.last_key = item.key;
    //   console.log('Last key updated to '+this.last_key);
    // }
  }
  deletedObj_listener(item:any){
    console.log('Removed data 2!');
    // console.log(item);
    console.log(item);
    console.log('-------------');
  }
}