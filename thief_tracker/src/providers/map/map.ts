import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapOptions } from '@ionic-native/google-maps';
import { ZonaA } from '../../models/zonaA';
import { GpsProvider } from '../gps/gps';
import { Posicion } from '../../models/posicion';

/*
  Generated class for the MapProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MapProvider {

  map:GoogleMap;
  mapOptions: GoogleMapOptions;
  reciverInit:Function;

  constructor(public http: HttpClient, private gps:GpsProvider) {
    console.log('Hello MapProvider Provider');
  }
  
  show(zA:ZonaA){
    if (!(this.map == null)){
      zA.show(this.map);
    }else{
      throw "Call to show zA rejected due to indefinite of map"
    }
  }
  remove(zA:ZonaA){
    if (!(this.map == null)){
      zA.remove();
    }else{
      throw "Call to remove zA rejected due to indefinite of map"
    }
  }
  setMapTarget(p:Posicion){
    if (this.map == null){
      this.mapOptions = {
        camera: {
          target: p
        }
      };
      this.map = GoogleMaps.create('map_canvas', this.mapOptions);
      console.log("map created!");
      let z1 = new ZonaA(12);
      z1.show(this.map);
      //this.reciverInit();
    }
  }
  loadMap(reciverInit: Function) {
    this.reciverInit = reciverInit;
    this.gps.getPosition(this.setMapTarget);
    // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
    //   alert('clicked');
    // });
  }
}
