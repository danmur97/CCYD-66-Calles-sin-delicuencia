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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }
  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         }
         
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Alarm',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      },
      draggable: true
    });
    let circle3:Circle = this.map.addCircleSync({
      center: marker.getPosition(),
      radius: 25,
      fillColor: "rgba(0,0,255,0.5)",
      strokeColor: "rgba(0,0,0,0)",
      strokeWidth: 1
    });
    let circle2:Circle = this.map.addCircleSync({
      center: marker.getPosition(),
      radius: 13,
      fillColor: "rgba(255,255,0,0.5)",
      strokeColor: "rgba(0,0,0,0)",
      strokeWidth: 1
    });
    let circle1:Circle = this.map.addCircleSync({
      center: marker.getPosition(),
      radius: 5,
      fillColor: "rgba(255,0,0,0.5)",
      strokeColor: "rgba(0,0,0,0)",
      strokeWidth: 1
    });
    marker.bindTo("position",circle1,"center");
    marker.bindTo("position",circle2,"center");
    marker.bindTo("position",circle3,"center");
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }
}
