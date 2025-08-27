import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {
  // Propiedad para almacenar el monto de la donación
  donationAmount: number = 25; // Valor por defecto

  constructor() { }

  ngOnInit(): void {
  }

  // Método para asignar un monto predefinido
  setAmount(amount: number) {
    this.donationAmount = amount;
  }

  // Método para simular el proceso de donación
  processDonation() {
    if (this.donationAmount > 0) {
      alert(`Gracias por tu donación de $${this.donationAmount}. ¡Tu apoyo es vital para nuestro sueño!`);
      // Aquí se integraría la lógica real de pago (Stripe, PayPal, etc.)
    } else {
      alert('Por favor, ingresa un monto válido.');
    }
  }
}
