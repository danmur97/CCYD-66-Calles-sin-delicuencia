import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GpsProvider } from '../gps/gps';
import { ZonaA } from '../../models/zonaA';

/*
  Generated class for the ZAgeneratorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ZAgeneratorProvider {

  constructor(public http: HttpClient, private gps:GpsProvider) {
    // private gps:GpsProvider
    console.log('Hello ZAgeneratorProvider Provider');
  }

  newZA():Promise<ZonaA>{ 
    return new Promise(
      (resolve, reject) => {
        this.gps.getPosition(false).then(
          (p) => {
            resolve(new ZonaA({id:"",usuario:"Danmur",fecha:"01.10.18",posicionGPS:p}) );
          }
        );
      }
    );
  }
}
