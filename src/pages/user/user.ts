import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProgramLanguagePage } from '../program-language/program-language';
import { PageService } from '../page.service';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private share: PageService) {
    
  }

  name = JSON.parse(localStorage.getItem("person"))[0].user
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  pageProgramLanguage(i) {
    this.share.doClick(i);
    console.log(i);
    this.navCtrl.push(ProgramLanguagePage);
  }

}
