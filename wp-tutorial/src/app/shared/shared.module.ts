import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { WpHeadComponent } from './wp-head/wp-head.component';

@NgModule({
  declarations: [WpHeadComponent],
  imports: [CommonModule, IonicModule],
  exports: [WpHeadComponent]
})
export class SharedModule {}
