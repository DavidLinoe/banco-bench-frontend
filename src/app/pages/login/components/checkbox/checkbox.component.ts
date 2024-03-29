import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  checked: boolean = true;
  check() {
    this.checked = !this.checked
    
    if (!this.checked) {
      localStorage.setItem('check', 'checked');
  
    } else {
      localStorage.removeItem('check');
    }
  }
}
