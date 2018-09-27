import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapOptions } from '@ionic-native/google-maps';
import { GpsProvider } from '../gps/gps';
import { ZonaA } from '../../models/zonaA';

/*
  Generated class for the MapProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MapProvider {

  map:GoogleMap;
  mapOptions: GoogleMapOptions;

  constructor(public http: HttpClient,private gps:GpsProvider) {
    console.log('Hello MapProvider Provider');
  }
  
  show(zA:ZonaA){
    if (!(typeof this.map === "undefined")){
      zA.show(this.map);
    }else{
      throw "Call to show zA rejected due to indefinite of map"
    }
  }
  remove(zA:ZonaA){
    if (!(typeof this.map === "undefined")){
      zA.remove();
    }else{
      throw "Call to remove zA rejected due to indefinite of map"
    }
  }
  loadMap() {
    if (typeof this.map === "undefined"){
      this.mapOptions = {
        camera: {
          target: {lat: 43.0741904,lng: -89.3809802}
          // target: this.gps.getPosition()
        }
      };
      this.map = GoogleMaps.create('map_canvas', this.mapOptions);
      console.log("map created!");
      let z1 = new ZonaA(12);
      z1.show(this.map);
    }
    // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
    //   alert('clicked');
    // });
    // this.adminZonaA.actualizarZonas().subscribe(
    //   (zona)=>{
    //     this.map_zonesA.push(zona);
    //   }
    // );
  }
}
