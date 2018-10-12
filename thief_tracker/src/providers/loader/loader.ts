import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loading, LoadingController } from 'ionic-angular';

/*
  Generated class for the LoaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoaderProvider {
  loader:Loading;
  constructor(public http: HttpClient,private loadingCtrl:LoadingController) {
    console.log('Hello LoaderProvider Provider');
  }
  disp_loader(message:string){
    this.loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: message
    });
    this.loader.present();
  }
  dismiss_loader(){
    if(this.loader != null){
      this.loader.dismiss();
      this.loader = null;
    }
  }
}
