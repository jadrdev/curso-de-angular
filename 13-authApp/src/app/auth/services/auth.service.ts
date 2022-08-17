import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthResponse, User } from '../interfaces/auth-interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl
  private _usuario!: User

  get Usuario() {
    return { ...this._usuario }
  }

  registro(name: string, email: string, password: string) {
    const url = `${this.baseUrl}/auth/new`;
    const body = { name, email, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
      tap((resp) => {
        if (resp.ok) {
          localStorage.setItem('token', resp.token!);
        }
      }),
      map((valid) => valid.ok),
      catchError((err) => of(err.error.msg))
    );
  }

  /**
   * We're sending a POST request to the server with the user's email and password, and if the server
   * responds with a valid token, we're saving it in localStorage and setting the user's name and uid
   * @param {string} email - string, password: string
   * @param {string} password - string
   * @returns The observable of the response of the post request.
   */
  login(email: string, password: string) {

    const url = `${this.baseUrl}/auth`;
    const body = {email, password};

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(
          resp => {
            if (resp.ok) {
              localStorage.setItem('token', resp.token!)
            }
          }
        ),
        map(valid => valid.ok),
        catchError(err => of(err.error.msg))
    )

  }

 /**
  * It sends a request to the server to renew the token, and if the server responds with a valid token,
  * it saves it in localStorage and returns true, otherwise it returns false
  * @returns The token is being returned.
  */
  validarToken(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(url, { headers })
      .pipe(
        map(resp => {

           localStorage.setItem('token', resp.token!);
           this._usuario = {
             name: resp.name!,
             uid: resp.uid!,
             email: resp.email!
           };
          return resp.ok
        }),
        catchError(err => of(false))
      )
  }


  logout() {
    localStorage.clear()
  }
}
