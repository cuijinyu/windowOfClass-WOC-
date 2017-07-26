import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Me } from './me';

@NgModule({
  declarations: [
    Me,
  ],
  imports: [
    IonicPageModule.forChild(Me),
  ],
  exports: [
    Me
  ]
})
export class MeModule {}
