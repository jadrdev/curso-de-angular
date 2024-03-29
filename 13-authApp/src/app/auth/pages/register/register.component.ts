import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent {
  miformulario: FormGroup = this.fb.group({
    name: ['Test 3', [Validators.required]],
    email: ['test3@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private Router: Router,
    private AuthService: AuthService
  ) { }

  register() {

    const {email, password, name} = this.miformulario.value;
    this.AuthService.registro(name, email, password)
      .subscribe((ok) => {
      if (ok === true) {
        this.Router.navigateByUrl('/dashborad');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ok,
        });
      }
    });
  }
}
