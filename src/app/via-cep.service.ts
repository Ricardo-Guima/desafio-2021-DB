import { Injectable } from '@angular/core';
import { Ceps } from './ceps';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ViaCepService {
  constructor(private http: HttpClient) {}
  getCep(cep: string) {
    return this.http.get('https://viacep.com.br/ws/' + cep + '/json/');
  }
}
