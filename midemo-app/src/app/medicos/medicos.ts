import { Component } from '@angular/core';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card";
import { MatTable, MatHeaderRowDef, MatRowDef, MatHeaderCellDef, MatCellDef } from "@angular/material/table";
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-medicos',
  imports: [MatFormField, MatLabel, MatIcon, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatTable, MatHeaderRowDef, MatRowDef, MatHeaderCellDef, MatCellDef, Navbar],
  templateUrl: './medicos.html',
  styleUrl: './medicos.css',
})
export class Medicos {

  displayedColumns: string[] = [
  'nombre',
  'especialidad',
  'cmp',
  'telefono',
  'estado',
  'acciones'
];

medicos = [
  {
    nombre: 'Dr. Carlos Pérez',
    especialidad: 'Cardiología',
    cmp: '12345',
    telefono: '987654321',
    estado: 'Activo'
  },
  {
    nombre: 'Dra. Ana Torres',
    especialidad: 'Pediatría',
    cmp: '45678',
    telefono: '999888777',
    estado: 'Activo'
  },
  {
    nombre: 'Dr. Luis Gómez',
    especialidad: 'Traumatología',
    cmp: '78945',
    telefono: '955444333',
    estado: 'Licencia'
  }
];
}
