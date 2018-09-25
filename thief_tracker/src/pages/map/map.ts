import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Circle
} from '@ionic-native/google-maps';
import { AdminZonaAProvider } from '../../providers/admin-zona-a/admin-zona-a';
import { ZonaA } from '../../models/zonaA';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map:GoogleMap;
  map_zonesA=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private adminZonaA:AdminZonaAProvider) {
  }

  ionViewDidLoad() {
    this.loadMap();
    console.log("Hi XD");
  }
  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         }
         //this.gps_provider.getPosition()
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
    let marker: Marker = this.map.addMarkerSync({
      title: 'Alarm',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 53.0741904,
        lng: -79.3809802
      },
      draggable: true
  });
    let z1 = new ZonaA(10,new Location());
    z1.show(this.map);
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
