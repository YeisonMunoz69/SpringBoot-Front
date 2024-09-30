import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  personas: any[] = [];
  paises: any[] = [];
  estados: any[] = [];

  nuevaPersona = { nombre: '', apellido: '', paisId: null, estadoId: null };  // Incluimos paisId y estadoId

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    // Cargar personas, países y estados
    this.backendService.getPersonas().subscribe(data => {
      this.personas = data;
    });

    this.backendService.getPaises().subscribe(data => {
      this.paises = data;
    });

    this.backendService.getEstados().subscribe(data => {
      this.estados = data;
    });
  }

  crearPersona(): void {
    if (this.nuevaPersona.nombre && this.nuevaPersona.apellido && this.nuevaPersona.paisId && this.nuevaPersona.estadoId) {
      this.backendService.createPersona(this.nuevaPersona).subscribe(() => {
        // Recargar la lista de personas después de crear
        this.backendService.getPersonas().subscribe(data => {
          this.personas = data;
        });
        // Limpiar el formulario
        this.nuevaPersona = { nombre: '', apellido: '', paisId: null, estadoId: null };
      });
    }
  }
}
