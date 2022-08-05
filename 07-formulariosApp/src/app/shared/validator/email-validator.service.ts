import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(private http: HttpClient) { }

/**
 * It returns an Observable that emits a ValidationErrors object if the email is already taken, and
 * null otherwise
 * @param {AbstractControl} control - AbstractControl - The control to validate.
 * @returns An Observable of an array of objects.
 */

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value
    console.log(email)
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
      .pipe(
        delay(3000),
        map(resp => {
          return (resp.length === 0)
            ? null
            : { emailTomado: true }
      })
    )
  }
}
