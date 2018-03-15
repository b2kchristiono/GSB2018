import { Component } from '@angular/core';
import {  NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

/*  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
*/
  async register(user: User) {
  try {
   const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);

   if(result){
     this.toast.create({
       message: 'Un utilisateur vient de se créer',
       duration: 3000,
       position: 'middle'
     }).present();
   }
 }
    catch (e) {
      console.error(e)
          }
        }
      }
