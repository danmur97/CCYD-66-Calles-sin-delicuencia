import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ZonaA } from '../../models/zonaA';
import { GpsProvider } from '../gps/gps';
import { MapProvider } from '../map/map';
import { ReportadorProvider } from '../reportador/reportador';
import { DebugToastProvider } from '../debug-toast/debug-toast';

/*
  Generated class for the AdminZonaAProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdminZonaAProvider {

  zonasA_user:ZonaA[] = [];
  zonasA_external:ZonaA[]  = [];
  user = "Danmur";

  constructor(public http: HttpClient,private map:MapProvider,
    private reporter:ReportadorProvider,private dtConsole:DebugToastProvider) {
    console.log('Hello AdminZonaAProvider Provider');
  }
  getLastZA():ZonaA{
    return this.zonasA_user[this.zonasA_user.length-1];
  }
  loc_recepcionZonaA(zA:ZonaA){
    // Observer next method for local new zA event
    this.reporter.add(zA);
  }
  loc_eliminarZonaA(zA:ZonaA){
    // Observer next method for local deleted zA event
    this.reporter.remove(zA);
  }
  ext_recepcionZonaA(zA:ZonaA){
    // Observer next method for external new zA event
    console.log('External reception (added) called');
    if(zA.usuario == this.user){
      // this.zonasA_user.push(zA)
      this.zonasA_user[zA.get_id()] = zA;
      this.dtConsole.log2('External reception (added): User zone recieved');
    }else{
      // this.zonasA_external.push(zA);
      this.zonasA_external[zA.get_id()] = zA;
      this.dtConsole.log2('External reception (added): NOT user zone recieved'); 
    }
    console.log(this.zonasA_user);
    this.map.show(zA);
  }
  ext_eliminarZonaA(zA:ZonaA){
    // Observer next method for extenal deleted zA event
    console.log('External reception (deleted) called');
    let zA_user = this.zonasA_user[zA.get_id()];
    let zA_ext = this.zonasA_external[zA.get_id()];
    console.log(zA_user);
    console.log(zA_ext);
    if(!(zA_user == null)){
      this.dtConsole.log2('External reception (deleted): User zone recieved');
      this.zonasA_user.splice(this.zonasA_user.indexOf(zA_user), 1);
      this.map.remove(zA_user);
    }else if(!(zA_ext == null)){
      this.dtConsole.log2('External reception (deleted): NOT user zone recieved');
      this.zonasA_external.splice(this.zonasA_external.indexOf(zA_ext), 1);
      this.map.remove(zA_ext);
    }else{
      this.dtConsole.log('Zone not found!');
    }
  }
}
