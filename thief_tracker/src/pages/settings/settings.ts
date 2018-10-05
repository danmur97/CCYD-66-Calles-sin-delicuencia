import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Settings } from '../../providers';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
export var _settings:any = {debug_messages:false,false_gps: false};

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  
  debug_messages:boolean;
  false_gps:boolean;

  constructor(public navCtrl: NavController) {
    this.debug_messages = _settings.debug_messages;
    this.false_gps = _settings.false_gps;
  }
  ionViewDidLoad() {

  }
  update(){
    _settings.debug_messages = this.debug_messages;
    _settings.false_gps = this.false_gps;
  }
}
