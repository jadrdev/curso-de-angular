import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, Validators} from '@angular/forms';
import { emailPattern, nombreApellidoPattern, NoPuedeSerSorakku } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.ValidatorService.nombreApellidoPattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.ValidatorService.emailPattern),
        ],
        [this.EmailValidatorService],
      ],
      nick: [
        '',
        [Validators.required, this.ValidatorService.NoPuedeSerSorakku],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [
        this.ValidatorService.camposIguales('password', 'password2'),
      ],
    }
  );

/**
 * If the email field has an error of type required, return the string 'El email es obligatorio', if it
 * has an error of type pattern, return the string 'El email no es válido', and if it has an error of
 * type emailTomado, return the string 'El email ya está en uso'
 * @returns The error message that is being returned is the one that is being returned by the
 * validator.
 */
  get EmailErrorMSG(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.['required']) {
      return 'El email es obligatorio';
    } else if (errors?.['pattern']) {
      return 'El email no es válido';
    } else if (errors?.['emailTomado']) {
      return 'El email ya está en uso';
    }
    return ''
  }

  constructor(
    private fb: FormBuilder,
    private ValidatorService: ValidatorService,
    private EmailValidatorService: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Joshua Aaron Diaz Robayna',
      email: 'jadrdevcm@gmail.com',
      nick: 'Jadrdev',
      password: '123456',
      password2: '123456',
    });
  }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }





  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
