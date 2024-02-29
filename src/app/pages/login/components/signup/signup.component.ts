import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  public RegisterForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
     private http: HttpClient,
     private routerNavigate: Router,
     private userService: UserService
    ) {}
  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      nome: [null, Validators.required],

      telefone: [null, Validators.required],

      email: [null, [Validators.email, Validators.required]],

      senha: [null, Validators.required],
    });
  }
  enviarRegistro() {
   
    this.http
      .post('http://localhost:3000/authentication/register', { dados: this.RegisterForm.value })
      .subscribe({
        next: (res: any) => {
          console.log('res');
          this.routerNavigate.navigateByUrl('/reload');
        },
        error: (err: any) => {
          console.log('erro');
        },
      });
}

}
