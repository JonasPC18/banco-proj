import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { BalanceService } from '../../core/balance.service';

@Component({
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  balance = inject(BalanceService);
}
