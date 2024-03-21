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
      if (sessionStorage.getItem('check') != 'checked') {
        sessionStorage.setItem('check', 'checked');
      
      }
    } catch (error) {
      console.error(error);
    }
  }
}
