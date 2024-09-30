import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private apiUrl = 'http://localhost:8080/api';  // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) { }

  // Métodos para Estados
  getEstados(): Observable<any> {
    return this.http.get(`${this.apiUrl}/estados`);
  }

  createEstado(estado: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/estados`, estado);
  }

  deleteEstado(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/estados/${id}`);
  }

  // Métodos para Países
  getPaises(): Observable<any> {
    return this.http.get(`${this.apiUrl}/paises`);
  }

  createPais(pais: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/paises`, pais);
  }

  deletePais(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/paises/${id}`);
  }

  // Métodos para Personas
  getPersonas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/personas`);
  }

  createPersona(persona: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/personas`, persona);
  }

  deletePersona(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/personas/${id}`);
  }
}
