import { User } from "../providers";
import { ZonaA_map } from "./zonaA_map";
import { GoogleMap } from "@ionic-native/google-maps";

export class ZonaA {
    id:string;
    radio;
    posicionGPS:Location;
    usuario;
    fecha;
    Estado;
    map_zone:ZonaA_map;
    constructor(radio:number) {
        this.id;
        this.radio = radio;
        console.log("init zA");
        console.log(this.map_zone);
        // this.posicionGPS = posicionGPS;
    }
    get_id(){
        return this.id;
    }
    show(map:GoogleMap){
        this.map_zone = new ZonaA_map(map);
        this.map_zone.show();
    }
    remove(){
        this.map_zone.remove();
    }
  }