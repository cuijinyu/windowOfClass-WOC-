import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';
import {Index} from '../index/index';
import {Tools} from '../tools/tools';
import {Me} from '../me/me';

/**
 * Generated class for the Homepage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html'
})
@IonicPage()
export class Homepage {

  tab1Root: any = Index;
  tab2Root: any = Tools;
  tab3Root: any = Me;
  mySelectedIndex:number;
  constructor(public navCtrl: NavController,public navParams:NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
