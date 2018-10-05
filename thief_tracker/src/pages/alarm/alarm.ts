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
  already_pressed:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private cmdAlarm:CmdAlarmaProvider) {
      this.btn_img = "../assets/images/btn_1.png";//../../../resources/images/btn_1.png
      this.already_pressed = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlarmPage');
  }

  pressed(){
    if(!this.already_pressed){
      this.already_pressed = true;
      this.btn_img = "../assets/images/btn_2.png";
      setTimeout(
        ()=>{
          this.btn_img = "../assets/images/btn_1.png";
          this.cmdAlarm.alarm();
          this.already_pressed = false;
          console.log('pressed');
        }
      ,700);
    }
  }
  falseAlarm(){
    this.cmdAlarm.falseAlarm();
  }
}
