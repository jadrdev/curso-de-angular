import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array(
      [
        ['Death Note', Validators.required],
        ['Black Clover', Validators.required],
      ],
      Validators.required
    ),
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  /**
   * It returns the FormArray named 'favoritos' from the FormGroup named 'miFormulario'
   * @returns The FormArray object.
   */
  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  /**
   * If the field has errors and has been touched, then return true
   * @param {string} campo - string
   * @returns return (
   *     this.miFormulario.controls[campo].errors &&
   *     this.miFormulario.controls[campo].touched
   *   );
   */
  campoEsObligado(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  /**
   * If the form is invalid, mark all the form controls as touched and return
   * @returns The form is being reset.
   */
  guardar() {
    if (this.miFormulario.invalid) {
      /* Marking all the form controls as touched. */
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  agregarfavorito() {
    if (this.nuevoFavorito.invalid) { return }

    // this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required))

    this.nuevoFavorito.reset()
  }

  borrarfavorito(i: number) {
    this.favoritosArr.removeAt(i)
  }
}
