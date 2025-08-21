import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  items = [
    { icon: 'home',          label: 'Início',         link: '/',              exact: true },
    { icon: 'payments',      label: 'Pagamentos',     link: '/pagamentos',    exact: false },
    { icon: 'sync_alt',      label: 'Transferências', link: '/transferencias',exact: false },
    { icon: 'credit_card',   label: 'Cartões',        link: '/cartoes',       exact: false },
    { icon: 'trending_up',   label: 'Investimentos',  link: '/investimentos', exact: false },
  ];
}
