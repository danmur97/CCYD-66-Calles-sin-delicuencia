import { User } from "../providers";
import { ZonaA_map } from "./zonaA_map";
import { GoogleMap } from "@ionic-native/google-maps";
import { Posicion } from "./posicion";
import { _user } from "../app/app.module";

export class ZonaA {
    private id: string;
    usuario: string;
    private fecha: string;
    private posicionGPS: Posicion;
    private map_zone: ZonaA_map;
    constructor(param) {
        this.set(param);
    }
    set_id(id:string) {
        this.id = id;
    }
    get_id() {
        return this.id;
    }
    get() {
        return { id:this.id, usuario:this.usuario, fecha:this.fecha, posicionGPS:this.posicionGPS };
    }
    set(param) {
        this.id = param.id;
        this.usuario = param.usuario;
        this.fecha = param.fecha;
        this.posicionGPS = param.posicionGPS;
    }
    show(map:GoogleMap){
        this.map_zone = new ZonaA_map(map);
        if(this.usuario == _user){
            this.map_zone.show(this.posicionGPS,'red');
        }else{
            this.map_zone.show(this.posicionGPS,'yellow');
        }  
    }
    remove(){
        this.map_zone.remove();
    }
  }