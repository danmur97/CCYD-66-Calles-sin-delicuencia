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

  constructor(public http: HttpClient,private gps:GpsProvider) {
    console.log('Hello ZAgeneratorProvider Provider');
  }

  newZA(){
    return new ZonaA(20);
    // return new ZonaA(id,user,fecha,this.gps.getPosition());
  }
}
