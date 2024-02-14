import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LoginModule } from './pages/login/login.module';
import { NbStatusService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    LoginModule,
   
  ],
  providers:[NbStatusService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent implements OnInit{
  title = 'banco-frontend';

  constructor(private http:HttpClient){ }

    ngOnInit(): void {

   // this.http.get('http://localhost:3000/teste').subscribe(response =>{
//console.log(response)


   // })
  }
}
