import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { EstadosComponent } from './app/estados/estados.component';
import { PaisesComponent } from './app/paises/paises.component';
import { PersonaComponent } from './app/persona/persona.component';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: 'estados', component: EstadosComponent },
  { path: 'paises', component: PaisesComponent },
  { path: 'personas', component: PersonaComponent },
  { path: '', redirectTo: '/estados', pathMatch: 'full' }  // Ruta por defecto
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
});