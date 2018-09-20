import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ZonaA } from '../../models/zonaA';
import { GpsProvider } from '../gps/gps';

/*
  Generated class for the AdminZonaAProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdminZonaAProvider {
  
  zonasA_user = []
  zonasA_external = []

  constructor(public http: HttpClient) {
    console.log('Hello AdminZonaAProvider Provider');
  }
  nuevaZonaA(){
    // let zA:ZonaA = new ZonaA(15,this.gps_provider.obtenerPosicion());
    // this.zonasA_user.push(zA);
  }
  obtenerZonas(){
    return{};
  }
  recepcionZonaA(zA:ZonaA){
    this.zonasA_external.push(zA);
  }
  eliminarZonaA(zA:ZonaA){

  }
}
