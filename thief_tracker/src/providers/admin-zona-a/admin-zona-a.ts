import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ZonaA } from '../../models/zonaA';
import { GpsProvider } from '../gps/gps';
import { MapProvider } from '../map/map';
import { ReportadorProvider } from '../reportador/reportador';
import { DebugToastProvider } from '../debug-toast/debug-toast';
import { LoaderProvider } from '../loader/loader';
import { _user } from '../../app/app.module';

/*
  Generated class for the AdminZonaAProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdminZonaAProvider {

  zonasA_user:ZonaA[] = [];
  zonasA_external:ZonaA[]  = [];
  last_alarms:string[]=[];
  constructor(public http: HttpClient,private map:MapProvider,
    private reporter:ReportadorProvider,private loader:LoaderProvider,
    private dtConsole:DebugToastProvider) {
    console.log('Hello AdminZonaAProvider Provider');
  }
  getLastZA():ZonaA{
    if(this.last_alarms.length > 0){
      return this.zonasA_user[this.last_alarms.pop()];
    }else{
      return null;
    }
  }

  loc_recepcionZonaA(zA:ZonaA){
    // Observer next method for local new zA event
    this.reporter.add(zA);
    this.loader.disp_loader('Publicando alarma...');
  }
  loc_eliminarZonaA(zA:ZonaA){
    // Observer next method for local deleted zA event
    this.reporter.remove(zA);
  }
  ext_recepcionZonaA(zA:ZonaA){
    // Observer next method for external new zA event
    console.log('External reception (added) called');
    if(zA.usuario == _user){
      this.zonasA_user[zA.get_id()] = zA;
      this.last_alarms.push(zA.get_id());
      this.loader.dismiss_loader();
      this.dtConsole.log2('External reception (added): User zone recieved');
    }else{
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
      this.loader.dismiss_loader();
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
