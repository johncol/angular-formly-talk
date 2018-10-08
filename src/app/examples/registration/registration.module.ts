import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { RegistrationRoutingModule } from './registration.routing';
import { SharedModule } from '../../shared';

import {
  RegistrationContainerComponent,
  RegistrationIdentificationComponent
} from '@registration/components';
import { IdentificationValidatorService } from '@registration/services';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({}),
    FormlyMaterialModule,
    RegistrationRoutingModule,
    SharedModule
  ],
  declarations: [
    RegistrationContainerComponent,
    RegistrationIdentificationComponent
  ],
  providers: [IdentificationValidatorService]
})
export class RegistrationModule { }
