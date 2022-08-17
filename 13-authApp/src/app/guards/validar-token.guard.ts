import { Injectable } from '@angular/core';
import {  CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(
    private AuthService: AuthService,
    private routers: Router

  ) { }


  canActivate(): Observable<boolean> | boolean  {
    return this.AuthService.validarToken()
      .pipe(
        tap(valid => {
          if(!valid) {
          this.routers.navigateByUrl('/login');
        }
      })
    )
  }



  canLoad(): Observable<boolean> | boolean {
    return this.AuthService.validarToken()
      .pipe(
        tap(valid => {
          if(!valid) {
          this.routers.navigateByUrl('/login');
        }
      })
    )
  }




}
