import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { PersonaService } from '../persona/persona.service';  
import { EstadoService } from '../estados/estado.service'; 
import { PaisService } from '../paises/pais.service';  
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-persona',
  standalone: true,
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  imports: [CommonModule, FormsModule]
})

export class PersonaComponent implements OnInit {
  nombre: string = '';
  apellido: string = '';
  pais: string = '';
  estado: string = '';
  personas: any[] = []; // Datos para ngFor
  paises: any[] = []; // Lista de países
  estados: any[] = []; // Lista de estados

  constructor(private personaService: PersonaService) {}

  // Método para crear una nueva persona
  crearPersona() {
    const nuevaPersona = {
      nombre: this.nombre,
      apellido: this.apellido,
      pais: this.pais,
      estado: this.estado
    };

    this.personaService.crearPersona(nuevaPersona).subscribe((persona) => {
      this.personas.push(persona);
      this.resetForm();
    });
  }

  // Método para cargar todas las personas
  cargarPersonas() {
    this.personaService.obtenerPersonas().subscribe((data) => {
      this.personas = data;
    });
  }

  // Método para eliminar una persona
  eliminarPersona(id: string) {
    this.personaService.eliminarPersona(id).subscribe(() => {
      this.personas = this.personas.filter(persona => persona.id !== id);
    });
  }

  // Método para cargar los países y estados al inicio
  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    forkJoin({
      estados: this.personaService.obtenerEstados(),
      paises: this.personaService.obtenerPaises()
    }).subscribe({
      next: ({ estados, paises }) => {
        this.estados = estados;
        this.paises = paises;
      },
      error: (err) => {
        console.error('Error al cargar los datos:', err);
      }
    });
  }

  // Resetear el formulario
  resetForm() {
    this.nombre = '';
    this.apellido = '';
    this.pais = '';
    this.estado = '';
  }
}
