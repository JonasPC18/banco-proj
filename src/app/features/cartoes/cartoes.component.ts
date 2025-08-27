import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Cartao {
  id: string;
  titular: string;
  numero: string;   // 16 dígitos (fictício)
  final: string;    // últimos 4
  validade: string; // sempre 12/29
  bandeira: string; // sempre VISA
  bloqueado: boolean;
}

@Component({
  selector: 'app-cartoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.scss'],
})
export class CartoesComponent {
  private seq = 1;

  // Gera um número Visa fictício (começa com 4) e randomiza os demais dígitos
  private gerarNumeroVisa(): string {
    const digits = ['4'];
    for (let i = 0; i < 15; i++) {
      digits.push(String(Math.floor(Math.random() * 10)));
    }
    return digits.join('');
  }

  private criarCartao(): Cartao {
    const numero = this.gerarNumeroVisa();
    const final = numero.slice(-4);
    return {
      id: String(++this.seq),
      titular: 'JOÃO SILVA',
      numero,
      final,
      validade: '12/29',
      bandeira: 'VISA',
      bloqueado: false,
    };
  }

  cartoes = signal<Cartao[]>([
    // cartão inicial
    {
      id: String(this.seq),
      titular: 'JOÃO SILVA',
      numero: '4111111111111111',
      final: '1111',
      validade: '12/29',
      bandeira: 'VISA',
      bloqueado: false,
    },
  ]);

  adicionarCartao() {
    const novo = this.criarCartao();
    this.cartoes.update(list => [novo, ...list]);
  }

  toggleBloqueio(c: Cartao) {
    this.cartoes.update(list =>
      list.map(x => (x.id === c.id ? { ...x, bloqueado: !x.bloqueado } : x)),
    );
  }

  cancelar(c: Cartao) {
    // “Cancelar” = deletar o cartão
    this.cartoes.update(list => list.filter(x => x.id !== c.id));
  }

  masked(c: Cartao) {
    // exibe como **** **** **** 1234
    return `**** **** **** ${c.final}`;
  }
}
