import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ZonaA } from '../../models/zonaA';
/*
  Generated class for the ReportadorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReportadorProvider {
  private afList: AngularFireList<any>;
  constructor(public http: HttpClient, private afDB: AngularFireDatabase) {
    console.log('Hello ReportadorProvider Provider');
    this.init();
  }
  init(){
    this.afList = this.afDB.list('alarmas');
  }
  add(za:ZonaA){
    this.afList.push(za);
  }
  remove(za:ZonaA){
    if(!(za.get_id() == "")){
      this.afList.remove(za.get_id());
    } else {
      throw "id is undefined";
    }
  }
}