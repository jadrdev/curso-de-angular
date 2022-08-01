import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interfaces';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  .container {
    margin: 10px
  }`]
})
export class HomeComponent {

  get auth() {
    return this.AuthService.auth
  }

  constructor(
    private router: Router,
    private AuthService: AuthService
  ) { }


  salir() {
    //Ir al backedn y verificar si el usuario y contraseña son correctos
    this.router.navigate(['/auth'])
    localStorage.removeItem('token')
  }

}
