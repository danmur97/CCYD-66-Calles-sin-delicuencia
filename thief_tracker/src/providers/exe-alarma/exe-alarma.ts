import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from 'ionic-angular';

/*
  Generated class for the ExeAlarmaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExeAlarmaProvider {

  counter = 0;
  timer;
  confirm;
  loader;
  constructor(public http: HttpClient, private alerCtrl: AlertController,private loadingCtrl:LoadingController) {
    console.log('Hello ExeAlarmaProvider Provider');
  }
  showConfirmation(){
    this.start();

    this.confirm = this.alerCtrl.create({
      title: 'Alarmar a todos???',
      enableBackdropDismiss: false,
      message: 'Seguro que quieres activar la alarma? Se activara automaticamente en 10 segundos!!',
      buttons: [
        {
          text: 'No',
          handler: () => {
            this.cancel();
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.exeAlarm();
          }
        }
      ]
    });
    this.confirm.present()

    // this.loader = this.loadingCtrl.create({
    //   spinner: 'hide',
    //   showBackdrop: false,
    //   content: this.counter+' segundos para activar la alarma'
    // });
    // this.loader.present()
  }
  start(){
    this.counter = 10;
    this.timer = setInterval(
      ()=>{
        if(this.counter>0){
          this.counter--;
          // this.loader.data.content = this.counter+' segundos para activar la alarma';
        }else{
          this.exeAlarm();
        }
      }
    ,1000);
  }
  cancel(){
    // this.loader.dismiss();
    this.confirm.dismiss();
    clearInterval(this.timer);
  }
  exeAlarm(){
    this.cancel();
    console.log("Alarma activada!!!!");
  }
}
