import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posicion } from '../../models/posicion';
import { Geolocation } from '@ionic-native/geolocation';
import { DebugToastProvider } from '../debug-toast/debug-toast';
/*
  Generated class for the GpsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GpsProvider {
  constructor(public http: HttpClient,private geolocation: Geolocation,
    private dtConsole:DebugToastProvider) {
    console.log('Hello GpsProvider Provider');
  }
  getPosition(true_gps):Promise<Posicion>{//successFx:(p:Posicion,obj:any)=>any,obj:any
    return new Promise(
      (resolve, reject) => {
        this.geolocation.getCurrentPosition().then(
          (resp) => {
            if(!true_gps){
              // successFx(new Posicion(resp.coords.latitude+Math.random(),resp.coords.longitude+Math.random()),obj);
              resolve(new Posicion(resp.coords.latitude+Math.random()*0.0004,resp.coords.longitude+Math.random()*0.0004));
            }else{
              // successFx(new Posicion(resp.coords.latitude,resp.coords.longitude),obj);
              resolve(new Posicion(resp.coords.latitude,resp.coords.longitude));
            }
            console.log('Success getting location. Returned '+true_gps+' location');
          }
        ).catch(
          (error) => {
            // successFx(new Posicion(43.0741904,-89.3809802),obj);
            resolve(new Posicion(43.0741904,-89.3809802));
            this.dtConsole.log2('Returning default location. Error getting location');
          }
        );
      }
    );
  }
}
