import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private AuthService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.AuthService.verificarAuth()
      .pipe(
        tap(estaAutentica => {
          if (!estaAutentica) {
            this.router.navigate(['.auth/login'])
          }
        })
      )


  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {

    return this.AuthService.verificarAuth().pipe(
      tap((estaAutentica) => {
        if (!estaAutentica) {
          this.router.navigate(['.auth/login']);
        }
      })
    );

  }
}
