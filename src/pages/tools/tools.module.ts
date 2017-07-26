import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tools } from './tools';

@NgModule({
  declarations: [
    Tools,
  ],
  imports: [
    IonicPageModule.forChild(Tools),
  ],
  exports: [
    Tools
  ]
})
export class ToolsModule {}
