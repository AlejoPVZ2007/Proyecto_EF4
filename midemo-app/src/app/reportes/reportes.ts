import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { Chart, registerables } from 'chart.js';
import { Navbar } from '../navbar/navbar';
Chart.register(...registerables);

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Navbar,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatButtonToggleModule,
  ],
  templateUrl: './reportes.html',
  styleUrl: './reportes.css'
})
export class Reportes implements AfterViewInit {

  periodoActivo = 'mes';
  meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.initCitasChart();
    this.initIngresosChart();
    this.initPacientesChart();
  }

  private initCitasChart(): void {
    const ctx = document.getElementById('citasChart') as HTMLCanvasElement;
    if (!ctx) return;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.meses,
        datasets: [
          {
            label: 'Citas totales',
            data: [48, 55, 62, 58, 70, 65],
            backgroundColor: '#3b82f6',
            borderRadius: 6,
          },
          {
            label: 'Canceladas',
            data: [5, 7, 4, 8, 6, 7],
            backgroundColor: '#fca5a5',
            borderRadius: 6,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: '#f3f4f6' } },
          x: { grid: { display: false } }
        }
      }
    });
  }

  private initIngresosChart(): void {
    const ctx = document.getElementById('ingresosChart') as HTMLCanvasElement;
    if (!ctx) return;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.meses,
        datasets: [{
          label: 'Ingresos (S/)',
          data: [14500, 16500, 18000, 17000, 21000, 20500],
          borderColor: '#22c55e',
          backgroundColor: 'rgba(34,197,94,0.08)',
          borderWidth: 2.5,
          pointBackgroundColor: '#22c55e',
          pointRadius: 5,
          tension: 0.4,
          fill: false,
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: false, grid: { color: '#f3f4f6' } },
          x: { grid: { display: false } }
        }
      }
    });
  }

  private initPacientesChart(): void {
    const ctx = document.getElementById('pacientesChart') as HTMLCanvasElement;
    if (!ctx) return;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.meses,
        datasets: [
          {
            label: 'Pacientes',
            data: [40, 48, 55, 50, 62, 58],
            backgroundColor: '#818cf8',
            borderRadius: 6,
          },
          {
            label: 'Citas atendidas',
            data: [48, 55, 62, 58, 70, 65],
            backgroundColor: '#38bdf8',
            borderRadius: 6,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom' } },
        scales: {
          y: { beginAtZero: true, grid: { color: '#f3f4f6' } },
          x: { grid: { display: false } }
        }
      }
    });
  }
}