import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  private apiKey: string = 'xVKkLQfI0YuiJ2qaUgl8rxieH8JODVVw';
  private servicioUrl = 'https://api.giphy.com/v1/gifs/';
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  /**
   * We're using the HTTPClient to make a GET request to the Giphy API, and then we're subscribing to
   * the response
   * @param {string} query - string - The search query.
   */
  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGIFResponse>(`${this.servicioUrl}/search`, { params} )
      .subscribe((resp) => {
        this.resultados = resp.data;
        localStorage.setItem('resultado', JSON.stringify(this.resultados));
      });
  }
}
