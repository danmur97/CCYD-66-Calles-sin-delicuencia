import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { _settings } from '../../pages/settings/settings';

/*
  Generated class for the DebugToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DebugToastProvider {

  constructor(public toastCtrl: ToastController) {
    console.log('Hello DebugToastProvider Provider');
  }
  message(message){
    console.log(message);
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
  log(message:string) {
    console.log(message);
    const toast = this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      closeButtonText: 'Ok',
      position: 'top'
    });
    if(_settings.debug_messages){
      toast.present();
    }
  }
  log2(message:string) {
    console.log(message);
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    if(_settings.debug_messages){
      toast.present();
    }
  }
}
