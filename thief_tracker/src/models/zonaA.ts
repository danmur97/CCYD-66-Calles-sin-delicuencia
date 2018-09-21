import { User } from "../providers";
import { ZonaA_map } from "./zonaA_map";
import { GoogleMap } from "@ionic-native/google-maps";

export class ZonaA {
    id;
    radio;
    posicionGPS:Location;
    usuario;
    fecha;
    Estado;
    map_zone:ZonaA_map;
    constructor(radio:number,posicionGPS:Location) {
        this.id;
        this.radio = radio;
        this.posicionGPS = posicionGPS;
    }
    show(map:GoogleMap){
        this.map_zone = new ZonaA_map(map);
    }
  
  }