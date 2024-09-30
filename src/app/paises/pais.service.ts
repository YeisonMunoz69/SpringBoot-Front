import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl = 'http://localhost:8080/api/paises'; // URL del backend para obtener países

  constructor(private http: HttpClient) {}

  obtenerPaises(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
