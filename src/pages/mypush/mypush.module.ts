import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mypush } from './mypush';

@NgModule({
  declarations: [
    Mypush,
  ],
  imports: [
    IonicPageModule.forChild(Mypush),
  ],
  exports: [
    Mypush
  ]
})
export class MypushModule {}
