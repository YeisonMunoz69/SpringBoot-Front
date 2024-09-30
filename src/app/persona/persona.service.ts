import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private apiUrl = 'http://localhost:8080/api'; // URL base de tu backend

  constructor(private http: HttpClient) {}

  // Método para obtener todas las personas
  obtenerPersonas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/personas`);
  }

  // Método para crear una nueva persona
  crearPersona(persona: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/personas`, persona);
  }

  // Método para obtener la lista de países
  obtenerPaises(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/paises`);
  }

  // Método para obtener la lista de estados
  obtenerEstados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/estados`);
  }

  // Método para eliminar una persona
  eliminarPersona(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/personas/${id}`);
  }
}
