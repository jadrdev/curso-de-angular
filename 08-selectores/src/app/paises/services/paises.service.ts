import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PaisSmall } from '../interfaces/paises.interfaces';
import { PaisFrontera } from '../interfaces/paisesFrontera.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private _regiones: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  private baseUrl = 'https://restcountries.com/v3.1/';

  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(private http: HttpClient) {}

  getPRegiones(region: string): Observable<PaisSmall[]> {
    const url: string = `${this.baseUrl}/region/${region}?fields=name,cca3`;
    return this.http.get<PaisSmall[]>(url);
  }

  getPaisFrontera(codigo: string): Observable<PaisFrontera[] | null> {
    if (!codigo) {
      return of(null);
    }

    const url: string = `${this.baseUrl}/alpha/${codigo}`;
    return this.http.get<PaisFrontera[]>(url);
  }

  getPaisFronteraName(codigo: string): Observable<PaisSmall[] | null> {
    const url: string = `${this.baseUrl}/alpha/${codigo}?fields=name,cca3`;
    return this.http.get<PaisSmall[]>(url);


  }
}
