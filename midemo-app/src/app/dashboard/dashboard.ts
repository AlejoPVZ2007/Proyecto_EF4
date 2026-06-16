import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';

import { BaseChartDirective } from 'ng2-charts';
import { Chart, registerables, ChartConfiguration, ChartType } from 'chart.js';

Chart.register(...registerables);

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    Navbar,
    BaseChartDirective,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard{
  public doughnutChartOptions = {
  responsive: true,
  maintainAspectRatio: false
};
  public chartOptions = {
  responsive: true,
  maintainAspectRatio: false
};
  // LINEAS
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Programadas',
        data: [15, 22, 18, 25, 28, 20, 16]
      },
      {
        label: 'Atendidas',
        data: [12, 20, 16, 22, 25, 18, 14]
      }
    ]
  };

  public lineChartType: ChartType = 'line';

  // DONUT
  public doughnutChartData = {
    labels: [
      'Medicina General',
      'Cardiología',
      'Pediatría',
      'Traumatología',
      'Otros'
    ],
    datasets: [
      {
        data: [35, 20, 18, 15, 12]
      }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

  // BARRAS
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Confirmadas',
        data: [120, 135, 150, 170, 180, 200]
      },
      {
        label: 'Canceladas',
        data: [15, 12, 18, 10, 8, 11]
      }
    ]
  };

  public barChartType: ChartType = 'bar';
}