import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public nombreApellidoPattern: string =
    '([a-zA-Z]+) ([a-zA-Z]+) ([a-zA-Z]+) ([a-zA-Z]+)';

  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  NoPuedeSerSorakku = (control: FormControl): ValidationErrors | null => {
    const valor = control.value?.trim().toLowerCase();
    if (valor === 'sorakku') {
      return {
        noSorakku: true,
      };
    }
    return null;
  };

  camposIguales = (campo1: string, campo2: string) => {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(campo1)?.value
      const pass2 = formGroup.get(campo2)?.value;

      console.log(pass1, pass2);

      /* Setting the error on the second field and returning the error. */
      if (pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({noIguales: true})
        return {noIguales: true }
      }

      formGroup.get(campo2)?.setErrors(null);
      return null
    }
  }
}
