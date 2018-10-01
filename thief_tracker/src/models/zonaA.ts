import { User } from "../providers";
import { ZonaA_map } from "./zonaA_map";
import { GoogleMap } from "@ionic-native/google-maps";
import { Posicion } from "./posicion";

export class ZonaA {
    private id: string;
    private usuario: string;
    private fecha: string;
    private posicionGPS: Posicion;
    private map_zone: ZonaA_map;
    constructor(zona) {
        this.set(zona);
    }
    getid() {
        return this.id;
    }
    get() {
        return { id:this.id, usuario:this.usuario, fecha:this.fecha, posicionGPS:this.posicionGPS };
    }
    set(zona) {
        this.id = zona.id;
        this.usuario = zona.usuario;
        this.fecha = zona.fecha;
        this.posicionGPS = zona.posicionGPS;
    }
    show(map:GoogleMap){
        this.map_zone = new ZonaA_map(map);
        this.map_zone.show(this.posicionGPS);
    }
    remove(){
        this.map_zone.remove();
    }
  }