import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramLanguagePage } from './program-language';

@NgModule({
  declarations: [
    ProgramLanguagePage,
  ],
  imports: [
    IonicPageModule.forChild(ProgramLanguagePage),
  ],
})
export class ProgramLanguagePageModule {}
