import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';

interface CitaCalendario {
  hora: string;
  paciente: string;
  medico: string;
  estado: string;
  codigo: string;
  color: string;
}

interface DiaCalendario {
  dia: number;
  eventos: string[];
}

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule, Navbar],
  templateUrl: './calendario.html',
  styleUrl: './calendario.css'
})
export class Calendario {

  selectedDay = 9;

  dias: DiaCalendario[] = [
    { dia: 1,  eventos: [] },
    { dia: 2,  eventos: [] },
    { dia: 3,  eventos: [] },
    { dia: 4,  eventos: [] },
    { dia: 5,  eventos: [] },
    { dia: 6,  eventos: [] },
    { dia: 7,  eventos: [] },
    { dia: 8,  eventos: [] },
    { dia: 9,  eventos: ['green', 'orange', 'blue'] },
    { dia: 10, eventos: ['green', 'orange'] },
    { dia: 11, eventos: [] },
    { dia: 12, eventos: [] },
    { dia: 13, eventos: [] },
    { dia: 14, eventos: [] },
    { dia: 15, eventos: ['blue'] },
    { dia: 16, eventos: [] },
    { dia: 17, eventos: [] },
    { dia: 18, eventos: [] },
    { dia: 19, eventos: [] },
    { dia: 20, eventos: [] },
    { dia: 21, eventos: [] },
    { dia: 22, eventos: [] },
    { dia: 23, eventos: [] },
    { dia: 24, eventos: [] },
    { dia: 25, eventos: [] },
    { dia: 26, eventos: [] },
    { dia: 27, eventos: [] },
    { dia: 28, eventos: [] },
    { dia: 29, eventos: [] },
    { dia: 30, eventos: [] },
  ];

  citasPorDia: { [key: number]: CitaCalendario[] } = {
    9: [
      { hora: '08:00', paciente: 'María García',   medico: 'Dr. Ramírez', estado: 'Confirmada', codigo: 'C-001', color: 'green'  },
      { hora: '09:30', paciente: 'Carlos Mendoza', medico: 'Dr. Salazar', estado: 'Pendiente',  codigo: 'C-002', color: 'orange' },
      { hora: '10:00', paciente: 'Ana Torres',     medico: 'Dra. Vega',   estado: 'Confirmada', codigo: 'C-003', color: 'green'  },
    ],
    10: [
      { hora: '08:00', paciente: 'Luis Huanca',    medico: 'Dr. Ramírez', estado: 'Confirmada',  codigo: 'C-004', color: 'green'  },
      { hora: '10:00', paciente: 'Rosa Flores',    medico: 'Dra. Vega',   estado: 'Pendiente',   codigo: 'C-005', color: 'orange' },
    ],
    15: [
      { hora: '09:00', paciente: 'Jorge Sánchez',  medico: 'Dr. Salazar', estado: 'Reprogramada', codigo: 'C-006', color: 'blue' },
    ],
  };

  get citasSeleccionadas(): CitaCalendario[] {
    return this.citasPorDia[this.selectedDay] || [];
  }

  seleccionarDia(dia: number): void {
    this.selectedDay = dia;
  }
}