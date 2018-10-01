import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ZonaA } from '../../models/zonaA';
import { GpsProvider } from '../gps/gps';
import { MapProvider } from '../map/map';
import { ReportadorProvider } from '../reportador/reportador';

/*
  Generated class for the AdminZonaAProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdminZonaAProvider {

  zonasA_user = [];
  zonasA_external = [];
  user = "Danmur";
  constructor(public http: HttpClient,private map:MapProvider,
    private reporter:ReportadorProvider) {
    console.log('Hello AdminZonaAProvider Provider');
  }

  getLastZA():ZonaA{
    return this.zonasA_user[this.zonasA_user.length-1];
  }
  loc_recepcionZonaA(zA:ZonaA){
    // Observer next method for local new zA event
    this.reporter.add(zA);
  }
  loc_eliminarZonaA(zA:ZonaA){
    // Observer next method for local deleted zA event
    this.reporter.remove(zA);
  }
  ext_recepcionZonaA(zA:ZonaA){
    // Observer next method for external new zA event
    if(zA.usuario == this.user){
      this.zonasA_user.push(zA)
    }else{
      // this.zonasA_external[zA.get_id()] = zA;
      this.zonasA_external.push(zA);
    }
    this.map.show(zA);
  }
  ext_eliminarZonaA(zA:ZonaA){
    // Observer next method for extenal deleted zA event
    let i = -1;
    let j = -1;
    if(zA.usuario == this.user){
      i = this.zonasA_user.indexOf(zA);
    }else{
      j = this.zonasA_external.indexOf(zA);
    }
    if(i >= 0){
      this.zonasA_external.splice(i, 1);
    }else if(j >= 0){
      this.zonasA_external.splice(j, 1);
    }
    if(i >= 0 || j >= 0){
      this.map.remove(zA);
    }
  }
}
