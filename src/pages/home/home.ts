import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage} from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams ) {

}

 ionViewDidLoad() {
  this.afAuth.authState.subscribe(data => {
    if(data && data.email && data.uid) {
    this.toast.create({
      message: 'Welcome to APP_NAME, ${data.email}',
      duration: 3000
    }).present();
  }
  
    })
  }
  logout(){
    this.navCtrl.setRoot(LoginPage);
  }
}
