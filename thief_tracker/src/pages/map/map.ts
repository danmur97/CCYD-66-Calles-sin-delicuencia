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
import { GpsProvider } from '../../providers/gps/gps';
import { MapProvider } from '../../providers/map/map';
import { RecibidorProvider } from '../../providers/recibidor/recibidor';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private map:MapProvider,private reciver:RecibidorProvider) {
  }
  ionViewDidLoad() {
    this.map.loadMap().then(
      (resolve)=>{
        this.reciver.init();
      }
    );
  }
}
