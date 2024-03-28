import { Component } from '@angular/core';
import { AuthServiceService } from '../shared/auth-service.service';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  providers:[AuthServiceService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';


  constructor(private auth: AuthServiceService) {} // Injection du service AuthService dans le constructeur

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
  }
}
