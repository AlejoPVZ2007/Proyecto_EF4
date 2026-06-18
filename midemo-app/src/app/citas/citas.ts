import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

import { Navbar } from '../navbar/navbar';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface Cita {
  hora: string;
  paciente: string;
  motivo: string;

  medico: string;
  especialidad: string;

  codigo: string;
  estado: string;
  color: string;
}

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    Navbar,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './citas.html',
  styleUrl: './citas.css'
})
export class Citas {

  citasHoy: Cita[] = [
    {
      hora: '08:00',
      paciente: 'María García',
      motivo: 'Control mensual',

      medico: 'Dr. Carlos Ramírez',
      especialidad: 'Medicina General',

      codigo: 'C-0001',
      estado: 'Confirmada',
      color: 'green'
    },
    {
      hora: '09:00',
      paciente: 'Carlos Mendoza',
      motivo: 'Revisión electrocardiograma',

      medico: 'Dr. Miguel Salazar',
      especialidad: 'Cardiología',

      codigo: 'C-0002',
      estado: 'Pendiente',
      color: 'orange'
    }
  ];

}