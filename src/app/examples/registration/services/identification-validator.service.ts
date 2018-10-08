import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class IdentificationValidatorService {

  checkIfAllowed(identificationNumber: string): Observable<boolean> {
    return new Observable(observer => {
      const timeout: number = Math.random() * 5000;
      const startsWith123: boolean = identificationNumber && identificationNumber.startsWith('123');
      console.log('startsWith123', startsWith123);
      setTimeout(() => observer.next(startsWith123), timeout);
    });
  }
}
