import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  private apiUrl = 'http://localhost:8080/api/estados'; // URL del backend para obtener estados

  constructor(private http: HttpClient) {}

  obtenerEstados(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
