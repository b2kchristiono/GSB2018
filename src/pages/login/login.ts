import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
 templateUrl: 'login.html'
})
export class LoginPage {

 constructor(public navCtrl: NavController, public navParams: NavParams, private toast: Toast) {}


/*  ionViewDidLoad() {
    this.navCtrl.push(HomePage)
  }
*/
  login(): void {

    this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }
}
