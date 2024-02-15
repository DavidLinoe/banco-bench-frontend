import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/containers/login/login.component';


export const routes: Routes = [

    {
         path:'',component:LoginComponent

    },
    {
        path:'',
        loadChildren:()=> import("./aplicacao/aplicacao.module").then(m=>m.AplicacaoModule)
    }
];
