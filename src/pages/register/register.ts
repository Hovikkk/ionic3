import { Component, ViewChild } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

    @ViewChild('username') user;
    @ViewChild('first') firstReg;
    @ViewChild('last') lastReg;
    @ViewChild('password') password;
    @ViewChild('email') email;

  formgroup:FormGroup;
  usernameForm: AbstractControl;
  firstname: AbstractControl;
  lastname: AbstractControl;
  emailForm: AbstractControl;
  passForm: AbstractControl;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder: FormBuilder, private alertCtrl: AlertController) {
    this.formgroup = formbuilder.group({
      usernameForm:['',Validators.compose([Validators.required, Validators.maxLength(10)])],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      emailForm:['',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      passForm:['',Validators.compose([Validators.required, Validators.minLength(6)])]
    });

    this.usernameForm = this.formgroup.controls['usernameForm'];
    this.firstname = this.formgroup.controls['firstname'];
    this.lastname = this.formgroup.controls['lastname'];
    this.emailForm = this.formgroup.controls['emailForm'];
    this.passForm = this.formgroup.controls['passForm'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registrationError() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'fill the fields',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  registerUser() {
      var person = [
          { user: this.user.value, last: this.lastReg.value, first: this.firstReg.value, password: this.password.value, email: this.email.value}
      ];
      console.log(person)
      console.log('Would sign in whit ', this.user.value, this.password.value);
      if((this.user.value != '') && (this.lastReg.value != '') && (this.firstReg.value != '') && (this.password.value != '') && (this.email.value != '')) {
        window.localStorage.setItem("person", JSON.stringify(person));
        console.log(JSON.parse(localStorage.getItem("person")))
        this.navCtrl.push(HomePage);
      } else {
        this.registrationError();
      }
      
  }
}
