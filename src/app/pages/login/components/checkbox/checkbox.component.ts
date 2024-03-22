import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  checked: boolean;
  check() {
    this.checked = !this.checked;
    if (this.checked) {
      localStorage.setItem('check', 'checked');
      setTimeout(() => {
        location.reload();
        localStorage.setItem('check', 'checked');
      }, 100);
    } else {
      localStorage.removeItem('check');
    }
  }
}
