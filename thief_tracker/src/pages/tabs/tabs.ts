import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab1Root, Tab2Root, Tab3Root } from '../';
import { AdminZonaAProvider } from '../../providers/admin-zona-a/admin-zona-a';
import { ExeAlarmaProvider } from '../../providers/exe-alarma/exe-alarma';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;

  tab1Title = "Alarmas";
  tab2Title = "Historial";
  tab3Title = "Mapa";

  constructor(public navCtrl: NavController) {
  }

}
