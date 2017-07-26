import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Guides } from './guides';

@NgModule({
  declarations: [
    Guides,
  ],
  imports: [
    IonicPageModule.forChild(Guides),
  ],
  exports: [
    Guides
  ]
})
export class GuidesModule {}
