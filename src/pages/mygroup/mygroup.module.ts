import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mygroup } from './mygroup';

@NgModule({
  declarations: [
    Mygroup,
  ],
  imports: [
    IonicPageModule.forChild(Mygroup),
  ],
  exports: [
    Mygroup
  ]
})
export class MygroupModule {}
