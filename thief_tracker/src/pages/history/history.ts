import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExeAlarmaProvider } from '../../providers/exe-alarma/exe-alarma';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private exe:ExeAlarmaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
