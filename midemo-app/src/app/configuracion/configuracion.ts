import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Navbar } from '../navbar/navbar';

interface ConfigSistema {
  nombre: string;
  ruc: string;
  direccion: string;
  telefono: string;
  email: string;
}

interface RolUsuario {
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Navbar,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './configuracion.html',
  styleUrl: './configuracion.css'
})
export class Configuracion {

  config: ConfigSistema = {
    nombre: 'Clínica San Martín',
    ruc: '20512345678',
    direccion: 'Av. Arequipa 1234, Lima',
    telefono: '01-234-5678',
    email: 'info@clinicasanmartin.com',
  };

  roles: RolUsuario[] = [
    { nombre: 'Admin',     descripcion: 'Acceso total al sistema' },
    { nombre: 'Recepción', descripcion: 'Gestión de citas y pacientes' },
    { nombre: 'Doctor',    descripcion: 'Acceso a historiales y agenda propia' },
  ];

  guardarConfiguracion(): void {
    console.log('Configuración guardada:', this.config);
  }
}