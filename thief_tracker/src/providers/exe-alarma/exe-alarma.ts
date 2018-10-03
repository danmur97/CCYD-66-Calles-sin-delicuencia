import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { AdminZonaAProvider } from '../admin-zona-a/admin-zona-a';
import { ZAgeneratorProvider } from '../z-agenerator/z-agenerator';

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
  // loader;

  constructor(public http: HttpClient, private alerCtrl: AlertController,
    private admZA:AdminZonaAProvider, private za_creator:ZAgeneratorProvider) {
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
  }
  start(){
    this.counter = 10;
    this.timer = setInterval(
      ()=>{
        if(this.counter>0){
          this.counter--;
          // this.loader.data.content = this.counter+' segundos para activar la alarma';
        }else{
          this.confirm.dismiss();
          this.exeAlarm();
        }
      }
    ,1000);
  }
  cancel(){
    clearInterval(this.timer);
  }
  exeAlarm(){
    this.cancel();
    this.za_creator.newZA().then(
      (zA) => {
        this.admZA.loc_recepcionZonaA(zA);
        console.log("Alarma activada!!!!");
      }
    );
  }
  falseAlarm(){
    // Eliminar ultima ZA creada por el usuario
    this.admZA.loc_eliminarZonaA(this.admZA.getLastZA());
    console.log("Alarma desactivada");
  }
}
