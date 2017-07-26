import { Component , ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Dataanalisis page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var echarts;
@IonicPage()
@Component({
  selector: 'page-dataanalisis',
  templateUrl: 'dataanalisis.html',
})
export class Dataanalisis {

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dataanalisis');


  }

  @ViewChild('container') container: ElementRef;
  chart: any;

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  ionViewDidEnter() {
    let ctx = this.container.nativeElement;
    this.chart = echarts.init(ctx);
    this.chart.setOption({
      title:{
        text:"这个群每天都在聊什么?"
      },
      series : [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          roseType:'angle',
          data:[
            {value:235, name:'谈论lol'},
            {value:274, name:'搞基？'},
            {value:310, name:'py交易'},
            {value:335, name:'犯傻？'},
            {value:400, name:'骗小学弟小学妹？'}
          ]
        }
      ]

    });
  }

}
