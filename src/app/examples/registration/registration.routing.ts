import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  RegistrationContainerComponent,
  RegistrationIdentificationComponent
} from './components';

const routes: Routes = [
  { path: '', component: RegistrationContainerComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'identification' },
    { path: 'identification', component: RegistrationIdentificationComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
