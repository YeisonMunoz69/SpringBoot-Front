import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importar FormsModule
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component'; // Componente standalone

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),  // Si tienes rutas, agrégalas aquí
    importProvidersFrom(FormsModule, HttpClientModule), // Importar FormsModule para ngModel
  ],
};
