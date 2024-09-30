import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paises',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  paises: any[] = [];
  nuevoPais = { nombre: '' };

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.cargarPaises();
  }

  cargarPaises(): void {
    this.backendService.getPaises().subscribe(data => {
      this.paises = data;
    });
  }

  crearPais(): void {
    if (this.nuevoPais.nombre) {
      this.backendService.createPais(this.nuevoPais).subscribe(() => {
        this.cargarPaises();
        this.nuevoPais = { nombre: '' };
      });
    }
  }

  eliminarPais(id: number): void {
    this.backendService.deletePais(id).subscribe(() => {
      this.cargarPaises();
    });
  }
}
