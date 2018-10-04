import { Marker, Circle, GoogleMap } from "@ionic-native/google-maps";
import { Posicion } from "./posicion";

export class ZonaA_map {
    marker:Marker;
    circles:Circle[];
    map:GoogleMap;
    constructor(map:GoogleMap) {
        this.map = map;
    }
    show(p:Posicion,icon:string){
        let marker: Marker = this.map.addMarkerSync({
            title: 'Alarm',
            icon: icon,
            animation: 'DROP',
            position: p,
            // {lat: 43.0741904,lng: -89.3809802},
            draggable: true
        });
        let circle3:Circle = this.map.addCircleSync({
            center: marker.getPosition(),
            radius: 25,
            fillColor: "rgba(0,0,255,0.5)",
            strokeColor: "rgba(0,0,0,0)",
            strokeWidth: 1
        });
        let circle2:Circle = this.map.addCircleSync({
            center: marker.getPosition(),
            radius: 13,
            fillColor: "rgba(255,255,0,0.5)",
            strokeColor: "rgba(0,0,0,0)",
            strokeWidth: 1
        });
        let circle1:Circle = this.map.addCircleSync({
            center: marker.getPosition(),
            radius: 5,
            fillColor: "rgba(255,0,0,0.5)",
            strokeColor: "rgba(0,0,0,0)",
            strokeWidth: 1
        });
        marker.bindTo("position",circle1,"center");
        marker.bindTo("position",circle2,"center");
        marker.bindTo("position",circle3,"center");

        this.marker = marker;
        this.circles = [circle1,circle2,circle3];
    }
    remove(){
        console.log("zAmap remove call");
        this.circles.forEach(element=>element.remove());
        this.marker.remove();   
    }
    move(value:boolean){
        console.log("zAmap move call");
        this.marker.setDraggable(value);
    }
  }