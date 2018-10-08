import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { Subject } from 'rxjs';
import { debounceTime, filter, switchMap, tap } from 'rxjs/operators';

import { Identification } from '@registration/models';
import { IdentificationValidatorService } from '@registration/services';

@Component({
  templateUrl: './registration-identification.component.html',
  styleUrls: ['./registration-identification.component.scss']
})
export class RegistrationIdentificationComponent implements OnInit {
  identificationInput$: Subject<string> = new Subject();
  identificationValidated: boolean = false;

  identification: Identification = {} as Identification;
  form: FormGroup = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      key: 'number',
      type: 'input',
      templateOptions: {
        label: 'Número de identificación',
        required: true,
        pattern: /^[1-9]{1}\d{5,9}$/,
        keyup: field => this.identificationInput$.next(field.model.number),        
      },
      validation: {
        messages: {
          required: 'Ingresa tu número de identificación para continuar',
          pattern: 'El número ingresado no es válido'
        }
      },
    }
  ];

  constructor(private identificationValidator: IdentificationValidatorService) { }

  ngOnInit() {
    this.identificationInput$
      .pipe(
        tap(() => this.identificationValidated = false),
        debounceTime(1500),
        filter(() => this.form.valid),
        tap(() => this.startsCheckingIdentification()),
        switchMap(this.identificationValidator.checkIfAllowed),
        tap(allowed => this.endsCheckingIdentification(allowed))
      )
      .subscribe({ next: console.log });
  }

  private startsCheckingIdentification(): void {
    this.identificationValidated = false;
    this.fields[0].className = 'inner-loader';
    this.fields[0].templateOptions.disabled = true;
  }

  private endsCheckingIdentification(allowed: boolean): void {
    this.identificationValidated = allowed;
    this.fields[0].className = '';
    this.fields[0].templateOptions.disabled = false;
  }

}
