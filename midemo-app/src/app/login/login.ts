import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  usuario = '';
  password = '';
  showPassword = false;

  demoAccounts = [
    { role: 'Admin', email: 'admin@smartcita.com' },
    { role: 'Recepción', email: 'recepcion@smartcita.com' },
    { role: 'Doctor', email: 'doctor@smartcita.com' },
  ];

  fillDemo(email: string): void {
    this.usuario = email;
  }

  onSubmit(): void {
    console.log('Iniciando sesión con:', this.usuario);
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
