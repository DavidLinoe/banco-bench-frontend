import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  checked: any;
  check() {
    try {
      if (localStorage.getItem('check') != 'checked') {
        localStorage.setItem('check', 'checked');
      
      }
    } catch (error) {
      console.error('Erro no check');
      setTimeout(function () {
        location.reload();
      }, 400);
    }
  }
}

