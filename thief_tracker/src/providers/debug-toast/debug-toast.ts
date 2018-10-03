import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

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
  log(message:string) {
    console.log(message);
    const toast = this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }
  log2(message:string) {
    console.log(message);
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
