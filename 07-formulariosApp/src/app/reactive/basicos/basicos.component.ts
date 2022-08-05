import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit  {
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('Black Clover 01'),
  //   precio: new FormControl('12'),
  //   stock: new FormControl('15'),
  // });

  /* Creating a form group with three controls. */
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.min(0), Validators.required]],
    stock: [, [Validators.min(0), Validators.required]],
  });

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.miFormulario.reset({
      nombre: 'Black Clover 01',
      precio: 12,
    })
  }
  /**
   * If the field has errors and has been touched, return true
   * @param {string} campo - string
   */
  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  guardar() {

    if (this.miFormulario.invalid) {
      /* Marking all the form controls as touched. */
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset()
  }
}
