import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule
  ],
  templateUrl: './pacientes.html',
  styleUrl: './pacientes.css'
})
export class Pacientes {

  displayedColumns: string[] = [
    'id',
    'paciente',
    'dni',
    'telefono',
    'estado',
    'citas',
    'ultimaVisita',
    'acciones'
  ];

  pacientes = [
    {
      id: 'P-0001',
      nombre: 'María Elena García Ríos',
      correo: 'maria.garcia@gmail.com',
      dni: '12345678',
      telefono: '987654321',
      estado: 'Activo',
      citas: 8,
      visita: '05/06/2026'
    },
    {
      id: 'P-0002',
      nombre: 'Carlos Alberto Mendoza',
      correo: 'cmendoza@outlook.com',
      dni: '23456789',
      telefono: '976543210',
      estado: 'Activo',
      citas: 3,
      visita: '01/06/2026'
    },
    {
      id: 'P-0003',
      nombre: 'Ana Lucía Torres',
      correo: 'ana.torres@gmail.com',
      dni: '34567890',
      telefono: '965432109',
      estado: 'Activo',
      citas: 12,
      visita: '07/06/2026'
    },
    {
      id: 'P-0004',
      nombre: 'Luis Huanca Chávez',
      correo: 'lhuanca@hotmail.com',
      dni: '45678901',
      telefono: '954321098',
      estado: 'Inactivo',
      citas: 1,
      visita: '10/03/2026'
    }
  ];
}