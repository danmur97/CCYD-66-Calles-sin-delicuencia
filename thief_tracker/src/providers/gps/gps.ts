import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posicion } from '../../models/posicion';
// import { Geolocation } from '@ionic-native/geolocation';
/*
  Generated class for the GpsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GpsProvider {

  constructor(public http: HttpClient) {
    // private geolocation: Geolocation
    console.log('Hello GpsProvider Provider');
  }
  getPosition(){
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   // resp.coords.latitude
    //   // resp.coords.longitude
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });
  }
  getFakePosition():Posicion{
    return new Posicion(43.0741904,-89.3809802);
  }

}
