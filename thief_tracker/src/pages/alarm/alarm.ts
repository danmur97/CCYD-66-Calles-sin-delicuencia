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
  btn_img:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private cmdAlarm:CmdAlarmaProvider) {
      this.btn_img = "../assets/images/btn_1.png";//../../../resources/images/btn_1.png
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlarmPage');
  }

  pressed(){
    this.btn_img = "../assets/images/btn_2.png";
    setTimeout(
      ()=>{
        this.btn_img = "../assets/images/btn_1.png";
        this.cmdAlarm.alarm();
        console.log('pressed');
      }
    ,700);
  }
  falseAlarm(){
    this.cmdAlarm.falseAlarm();
  }
}
