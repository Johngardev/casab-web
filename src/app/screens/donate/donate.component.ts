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
  // Cantidades predefinidas para donar
  presetAmounts: number[] = [20000, 50000, 100000, 250000];
  selectedAmount: number = 50000;
  customAmount: number | null = null;

  // Fondo seleccionado por defecto
  selectedFund: 'restauracion' | 'reserva' = 'restauracion';

  // Datos para transferencia directa (Nequi / Daviplata / Bancolombia)
  bankInfo = {
    nequi: '300 123 4567',
    bancolombia: 'Ahorros 123-456789-00',
    nit: '900.XXX.XXX-X'
  };

  selectAmount(amount: number): void {
    this.selectedAmount = amount;
    this.customAmount = null;
  }

  selectFund(fund: 'restauracion' | 'reserva'): void {
    this.selectedFund = fund;
  }

  processDonation(): void {
    const finalAmount = this.customAmount ? this.customAmount : this.selectedAmount;
    alert(`¡Gracias por apoyar a Casa B! Estás a punto de donar $${finalAmount.toLocaleString()} COP al fondo de ${this.selectedFund === 'restauracion' ? 'Restauración' : 'Reserva Natural'}. (Conecta aquí tu pasarela de pagos Wompi/MercadoPago).`);
  }
}
