import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ZonaA } from '../../models/zonaA';
import { GpsProvider } from '../gps/gps';
import { MapProvider } from '../map/map';

/*
  Generated class for the AdminZonaAProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdminZonaAProvider {
  
  zonasA_user = []
  zonasA_external = []

  constructor(public http: HttpClient,private map:MapProvider) {
    console.log('Hello AdminZonaAProvider Provider');
  }
  
  loc_recepcionZonaA(zA:ZonaA){
    // Observer next method for local new zA event

  }
  loc_eliminarZonaA(zA:ZonaA){
    // Observer next method for local deleted zA event

  }
  ext_recepcionZonaA(zA:ZonaA){
    // Observer next method for external new zA event
    this.zonasA_external[zA.get_id()] = zA;
    this.map.show(zA);
  }
  ext_eliminarZonaA(zA:ZonaA){
    // Observer next method for extenal deleted zA event
    this.zonasA_external.splice(this.zonasA_external.indexOf(zA), 1);
    this.map.remove(zA);
  }
}
