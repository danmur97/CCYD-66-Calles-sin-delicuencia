import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides = [
    {
      title: "Requerimientos",
      image: "../assets/tut/img1_1.png",
      description: "Para el correcto funcionamiento de la app es necesario que los servicios de GPS e internet estén habilitados.",
      image2: "../assets/tut/img1_2.png",
      description2: "Con el fin de evitar el mal uso de la aplicación, se requieren los datos del usuario como cedula, nombre, etc. (*)",
      final: "<i><u>(*) desarrollada parcialmente</i></u>"
    },
    {
      title: "Alarma",
      image: "../assets/tut/img2.png",
      description: "Al presionar el botón de pánico se generará una “zona de alarma” en la posición geográfica actual del usuario. Existe también opción de falsa alarma que eliminara la última alarma creada por el usuario.",
      image2: "",
      description2: "",
      final: ""
    },
    {
      title: "Zona de alarma",
      image: "../assets/tut/img3.png",
      description:"Es una zona circular compuesta por círculos internos cuyos colores representan el nivel de alarma, siendo el central y más rojizo el nivel más alto de alarma. El centro de la zona se ubica en la posición en la que el usuario genero la alarma.",
      image2: "",
      description2: "El nivel de alarma de la zona se reducirá a través del tiempo hasta que desaparece (*)",
      final: "<i><u>(*) característica no desarrollada</i></u>"
    },
    {
      title: "Rastreador de ladrones",
      image: "../assets/tut/img4.png",
      description: "Cualquier persona con la app será notificada (*) y podrá ver las zonas de alarma que se generen. La comunidad al ser alarmada puede avisar por medio de la app donde está ocurriendo la emergencia o bien donde se encuentra el delincuente. Si la policía se incorpora a este sistema, tendrán un rastreador indirecto de delincuentes que ayudara a su captura.",
      image2: "",
      description2: "",
      final: "<i><u>(*) característica no desarrollada</i></u>"
    },
    {
      title: "Celulares como cámaras de seguridad (*)",
      image: "../assets/tut/img5.png",
      description:"Transmisión de video o imágenes directamente a la policía que aporten mayor información sobre el incidente que se está presentando.",
      image2: "",
      description2: "",
      final: "<i><u>(*) característica no desarrollada</i></u>"
    }
  ];
  constructor(public navCtrl: NavController) {

  }
  toMain(){
    this.navCtrl.setRoot('TabsPage');
  }
}
