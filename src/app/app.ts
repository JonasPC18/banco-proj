import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  template: `
    <div class="layout">
      <app-sidebar></app-sidebar>

      <main class="main">

        <section class="conteudo">
          <router-outlet></router-outlet>
        </section>

        <footer class="rodape">
          <small>© {{ currentYear }} Banco Simples — protótipo.</small>
        </footer>
      </main>
    </div>
  `,
  styleUrls: ['./app.scss']
})
export class AppComponent {
  currentYear = new Date().getFullYear();
}
