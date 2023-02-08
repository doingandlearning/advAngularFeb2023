import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  _baseUrl = 'https://swapi.dev/';

  setBaseUrl(newUrl: string) {
    this._baseUrl = newUrl;
  }

  constructor(private http: HttpClient) {}

  getPlanets() {
    return this.http.get(`${this._baseUrl}planets`);
  }

  getStarships() {
    return this.http.get(`${this._baseUrl}starships`);
  }

  getResource(term: 'planets' | 'starships' | 'people') {
    return this.http.get(`${this._baseUrl}${term}`);
  }

  getByResourceAndId(term: 'planets' | 'starships' | 'people', id: number) {
    return this.http.get(`${this._baseUrl}${term}/${id}`);
  }
}
