import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component ,ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Mygroup } from '../mygroup/mygroup';
import {Mypush} from '../mypush/mypush';
import {Dataanalisis} from '../dataanalisis/dataanalisis';
/**
 * Generated class for the Index page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class Index {
  @ViewChild('mySlider') slider:Slides;
  mySlideOptions={
    autoplay:2000,
    initialSlide:0,
    pager:true,
    loop:true,
    speed:300
  };
  getMyData(){
    this.navCtrl.push(Dataanalisis);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOninit(){
    setInterval(()=>{
      this.slider.slideNext(300,true);
    },2000);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Index');
  }
  getMyGroup(){
    this.navCtrl.push(Mygroup);
  }
  getMyPush(){
    this.navCtrl.push(Mypush);
  }
}
