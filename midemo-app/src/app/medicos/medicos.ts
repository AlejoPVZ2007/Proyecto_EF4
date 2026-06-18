import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { CommonModule, NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-medicos',
  imports: [
  Navbar,
  CommonModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  NgClass
],
  templateUrl: './medicos.html',
  styleUrl: './medicos.css',
})
export class Medicos {

  medicos = [
    {
      inicial: 'C',
      nombre: 'Dr. Carlos Ramírez Soto',
      cmp: 'CMP-45231',
      especialidad: 'Medicina General',
      horario: '08:00 - 14:00',
      dias: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'],
      citas: 320,
      estado: 'Activo',
      color: 'blue'
    },
    {
      inicial: 'M',
      nombre: 'Dr. Miguel Salazar Torres',
      cmp: 'CMP-38901',
      especialidad: 'Cardiología',
      horario: '09:00 - 15:00',
      dias: ['Lun', 'Mié', 'Vie'],
      citas: 215,
      estado: 'Activo',
      color: 'red'
    },
    {
      inicial: 'P',
      nombre: 'Dra. Patricia Vega Huanca',
      cmp: 'CMP-52110',
      especialidad: 'Pediatría',
      horario: '07:00 - 13:00',
      dias: ['Lun', 'Mar', 'Jue'],
      citas: 480,
      estado: 'Activo',
      color: 'green'
    }
  ];
}
