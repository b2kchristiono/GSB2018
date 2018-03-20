import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { ApiProvider } from "../../providers/api/api";
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";

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

  user = {} as User;
 constructor(private afAuth: AngularFireAuth,
   public navCtrl: NavController, public navParams: NavParams,
   private toast: Toast, /*public api: ApiProvider*/) {}

   async login(user: User) {
    /*try {
      const result = await this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if (result)
        this.user=result.i.user.providerData[0];
        console.log(this.user);
        this.navCtrl.setRoot(HomePage);

    }
    catch (e) {
      console.error(e);
    }
  }
*/
this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email, user.password).then(
  val => {
  console.log(val)
  this.navCtrl.setRoot(HomePage);
  },
  error => {
            console.log(error);
            this.toast.show(`ERREUR`, '5000', 'bottom').subscribe(
  toast => {
            console.log(toast);
              }
          );
        }
        );
        }






register(){
  this.navCtrl.push(RegisterPage);
}

}
