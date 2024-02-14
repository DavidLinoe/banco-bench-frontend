import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{


  public RegisterForm: FormGroup
constructor(private formBuilder :FormBuilder,private http:HttpClient){}
ngOnInit(): void {
this.RegisterForm = this.formBuilder.group({

  
  user:[null,Validators.required],

  phone:[null,Validators.required],

  email:[null,[Validators.email,Validators.required]],

  senha:[null,Validators.required]
})
}
enviarRegistro(){
console.log(this.RegisterForm.value)
  this.http.post('http://localhost:3000/teste',{dados:this.RegisterForm.value}).subscribe(response =>{
console.log(response)})
}
}
