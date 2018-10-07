import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent, StepHeaderComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    StepHeaderComponent,
  ],
  exports: [
    CardComponent,
    StepHeaderComponent,
  ]
})
export class SharedModule { }
