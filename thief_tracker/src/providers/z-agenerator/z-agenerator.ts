import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GpsProvider } from '../gps/gps';
import { ZonaA } from '../../models/zonaA';
import { _user } from '../../app/app.module';
import { _settings } from '../../pages/settings/settings';

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
        this.gps.getPosition(!_settings.false_gps).then(
          (p) => {
            resolve(new ZonaA({id:"",usuario:_user,fecha:"01.10.18",posicionGPS:p}) );
          }
        );
      }
    );
  }
}
