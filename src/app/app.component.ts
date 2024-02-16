import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LoginModule } from './pages/login/login.module';
import { NbRestoreScrollTopHelper, NbSidebarService, NbStatusService } from '@nebular/theme';
import { HeaderComponent } from './header/header.component';
import { NavigationModule } from './navigation/navigation.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  providers:[
    NbStatusService,
    NbSidebarService,  
    NbRestoreScrollTopHelper// nao sei pra que, mas precisa
  ],
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
