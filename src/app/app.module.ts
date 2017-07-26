import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Data} from '../providers/data'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ItemDetailPage} from "../pages/item-detail-page/item-detail-page"
import {AddItemPage} from '../pages/add-item-page/add-item-page'
import { IonicStorageModule } from '@ionic/storage';
import { Guides}from '../pages/guides/guides';
import {Index} from '../pages/index/index';
import {Tools} from '../pages/tools/tools';
import {Me} from '../pages/me/me';
import { Homepage } from '../pages/homepage/homepage';
import {Mygroup} from '../pages/mygroup/mygroup';
import {Mypush} from '../pages/mypush/mypush';
import { Dataanalisis } from '../pages/dataanalisis/dataanalisis';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage,
    Guides,
    Index,
    Tools,
    Me,
    Homepage,
    Mygroup,
    Mypush,
    Dataanalisis
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage,
    Guides,
    Index,
    Tools,
    Me,
    Homepage,
    Mygroup,
    Mypush,
    Dataanalisis
  ],
  providers: [
    Storage,
    Data,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
