import { Component, ViewChild } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserPage } from '../user/user';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    @ViewChild('username') user;
    @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'check your username and password',
      buttons: ['Dismiss']
    });
    alert.present();
  }
  signInUser() {
      console.log('Would sign in whit ', this.user.value, this.password.value)
      if ((this.user.value != '') && (this.password.value != '') && (this.user.value == JSON.parse(localStorage.getItem("person"))[0].user) && (this.password.value == JSON.parse(localStorage.getItem("person"))[0].password)) {
          this.navCtrl.push(UserPage);
      } else {
          console.log("error!!!x!!")
          this.presentAlert()
      }
  }
}
