import { Component } from '@angular/core';
//import { IonicPage, NavController} from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private usua: string;
  constructor(public navCtrl: NavController, private usr: User) { }
  doLogin() {
    this.usr.set(this.usua + "");
    this.navCtrl.setRoot('TabsPage');
  }
}
