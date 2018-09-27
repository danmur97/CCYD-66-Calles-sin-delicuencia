import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CmdAlarmaProvider } from '../../providers/cmd-alarma/cmd-alarma';

/**
 * Generated class for the AlarmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alarm',
  templateUrl: 'alarm.html',
})
export class AlarmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private cmdAlarm:CmdAlarmaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlarmPage');
  }
  alarmBtnAction(){
    this.cmdAlarm.alarm();
  }

}
