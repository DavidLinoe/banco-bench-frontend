import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


interface loginResponse {
  validation: boolean;
  email: string;
  senha: string;
}


@Component({
  selector: 'app-signin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['email_teste2@gmail.com', [Validators.email, Validators.required]],

      senha: ['senha123', Validators.required],
    });
  }
  enviarLogin() {
    console.log(this.loginForm.value);
    
    this.http
      .post('http://localhost:3000/teste', { dados: this.loginForm.value })
      .subscribe((response) => {
        console.log(response)
        next: (res: loginResponse) => {
          if (res.validation) console.log('Acessou!');
          else console.log('Acesso Negado!');
        };
        error: (err: any) => {}
      });
  }
}
