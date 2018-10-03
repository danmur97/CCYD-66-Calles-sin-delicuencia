import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

import { MapProvider } from '../../providers/map/map';
import { RecibidorProvider } from '../../providers/recibidor/recibidor';
import { LoaderProvider } from '../../providers/loader/loader';
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
    private map:MapProvider,private reciver:RecibidorProvider,
    private loader:LoaderProvider) {
  }
  ionViewDidLoad() {
    this.loader.disp_loader('Cargando mapa...Se necesita habilitar GPS e internet');
    this.map.loadMap().then(
      (resolve)=>{
        this.reciver.init();
        this.loader.dismiss_loader();
      }
    );
  }
  
}
