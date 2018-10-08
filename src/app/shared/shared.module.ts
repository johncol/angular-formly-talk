import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonDirective } from './directives';
import {
  CardComponent,
  StepHeaderComponent,
  SecuredSiteComponent
} from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    StepHeaderComponent,
    ButtonDirective,
    SecuredSiteComponent,
  ],
  exports: [
    CardComponent,
    StepHeaderComponent,
    ButtonDirective,
    SecuredSiteComponent,
  ]
})
export class SharedModule { }
