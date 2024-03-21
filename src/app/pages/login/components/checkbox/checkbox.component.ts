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
   
       setTimeout(() => {
        localStorage.setItem('check', 'checked');
          location.reload();
    
  
       }, 400);
      
      
 
  }
}

