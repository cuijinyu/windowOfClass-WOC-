import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Index } from './index';

@NgModule({
  declarations: [
    Index,
  ],
  imports: [
    IonicPageModule.forChild(Index),
  ],
  exports: [
    Index
  ]
})
export class IndexModule {}
