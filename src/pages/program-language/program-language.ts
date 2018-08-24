import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PageService } from '../page.service';

/**
 * Generated class for the ProgramLanguagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-program-language',
  templateUrl: 'program-language.html',
})
export class ProgramLanguagePage {
  clickCount:number = this.share.num;

  constructor(public navCtrl: NavController, public navParams: NavParams, private share:PageService) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramLanguagePage');
  }

}
