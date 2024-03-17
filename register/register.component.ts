import { Component } from '@angular/core';
import { AuthServiceService } from '../shared/auth-service.service';
import { FormsModule } from '@angular/forms';
import { firebaseConfig } from '../../../firebase.config';
import { FIREBASE_OPTIONS, FirebaseApp } from '@angular/fire/compat';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-register',
  standalone: true,
  imports : [ FormsModule],
  providers: [
    AuthServiceService],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Utilisation de 'styleUrls' au lieu de 'styleUrl'
})
export class RegisterComponent {
  email = '';
  password = '';
  constructor(private auth: AuthServiceService) {} // Injection du service AuthService dans le constructeur

  register() {
    if (this.email === '') { // Utilisation de '===' pour comparer
      alert('Please enter email');
      return;
    }
    if (this.password === '') { // Utilisation de '===' pour comparer
      alert('Please enter password');
      return;
    }
    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
