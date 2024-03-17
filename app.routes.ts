import { Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { AppComponent } from './app.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path : '',
        redirectTo: 'register',
        pathMatch :'full'
        
    },
    {
        path : 'register',
        component:RegisterComponent
    },
    {
        path : 'login',
        component:LoginComponent
    },
    
    {
        path : 'pageAccueil',
        component:PageAccueilComponent
    },
    {
        path : 'angularDocumentation',
        component : DocumentationComponent
    },
    
    {
        path :'**',
        component: PageNotFoundComponent 
    }
];
