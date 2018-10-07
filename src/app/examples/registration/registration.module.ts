import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationContainerComponent } from './components';
import { RegistrationRoutingModule } from './registration.routing';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    SharedModule
  ],
  declarations: [RegistrationContainerComponent]
})
export class RegistrationModule { }
