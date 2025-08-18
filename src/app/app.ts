import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './shared/topbar/topbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopbarComponent],
  template: `
    <app-topbar appName="Banco Simples"></app-topbar>

    <main class="conteudo">
      <router-outlet></router-outlet>
    </main>

    <footer class="rodape">
      <small>© {{ currentYear }} Banco Simples — protótipo.</small>
    </footer>
  `,
  styleUrls: ['./app.scss']
})
export class AppComponent {
  currentYear = new Date().getFullYear();
}
