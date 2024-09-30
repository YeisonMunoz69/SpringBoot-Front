import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {
  estados: any[] = [];
  nuevoEstado = { nombre: '' };

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.cargarEstados();
  }

  cargarEstados(): void {
    this.backendService.getEstados().subscribe(data => {
      this.estados = data;
    });
  }

  crearEstado(): void {
    if (this.nuevoEstado.nombre) {
      this.backendService.createEstado(this.nuevoEstado).subscribe(() => {
        this.cargarEstados();  // Recargar la lista después de crear
        this.nuevoEstado = { nombre: '' };  // Limpiar formulario
      });
    }
  }

  eliminarEstado(id: number): void {
    this.backendService.deleteEstado(id).subscribe(() => {
      this.cargarEstados();  // Recargar la lista después de eliminar
    });
  }
}
