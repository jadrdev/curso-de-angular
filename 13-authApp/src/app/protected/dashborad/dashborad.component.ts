import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styles: [
    `
      * {
        margin: 15px;
      }
    `,
  ],
})
export class DashboradComponent {

  get usuario() {
    return this.AuthService.Usuario;
  }

  constructor(
    private router: Router,
    private AuthService: AuthService
  ) { }

  salir() {
    this.router.navigateByUrl('/auth')
    this.AuthService.logout();
  }
}
