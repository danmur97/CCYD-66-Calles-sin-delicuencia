import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExeAlarmaProvider } from '../exe-alarma/exe-alarma';

/*
  Generated class for the CmdAlarmaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CmdAlarmaProvider {

  constructor(public http: HttpClient, private exeAlarm:ExeAlarmaProvider) {
    console.log('Hello CmdAlarmaProvider Provider');
  }
  alarm(){
    this.exeAlarm.showConfirmation();
  }
}
