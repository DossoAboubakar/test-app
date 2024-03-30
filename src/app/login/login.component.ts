import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,AngularFireModule,HttpClientModule],
  providers:[AuthServiceService,DataService,HttpClient],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';


  constructor(private auth: AuthServiceService, private data: DataService ,private globalApp : AppComponent) {} // Injection du service AuthService dans le constructeur
 ngOnInit(): void {
   
  this.globalApp.updateTitle('login-view')
 }
  login() {
    if (this.email === '') { // Utilisation de '===' pour comparer
      alert('Please enter email');
      return;
      
    }
    if (this.password === '') { // Utilisation de '===' pour comparer
      alert('Please enter password');
      return;
    }
    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
    console.log('voici la donnee a afficher ici:')
    this.showData()
  }
    
    showData (){
    this.data.getData().subscribe({next:(data)=>console.table(data),
    error: err=>console.log('la requette a echouee',err)})

    }
}
