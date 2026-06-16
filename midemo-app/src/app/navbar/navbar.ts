import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

interface MenuItem {
  icon: string;
  text: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  imports: [MatListModule, MatIconModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  menuItems: MenuItem[] = [
    { icon: 'dashboard', text: 'Dashboard', route: '/dashboard' },
    { icon: 'people', text: 'Pacientes', route: '/pacientes' },
    { icon: 'medical_services', text: 'Médicos', route: '/medicos' },
    { icon: 'event_note', text: 'Citas', route: '/citas' },
    { icon: 'calendar_month', text: 'Calendario', route: '/calendario' },
    { icon: 'bar_chart', text: 'Reportes', route: '/reportes' }
  ];

}
