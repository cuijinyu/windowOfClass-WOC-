import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Dataanalisis } from './dataanalisis';

@NgModule({
  declarations: [
    Dataanalisis,
  ],
  imports: [
    IonicPageModule.forChild(Dataanalisis),
  ],
  exports: [
    Dataanalisis
  ]
})
export class DataanalisisModule {}
