import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {

  constructor(private router: Router ,private fireauth:AngularFireAuth) { }
  // Login method
  login(email: string, password: string) {
   this.fireauth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['pageAccueil']);
      })
      .catch(err => {
        alert(err.message);
        this.router.navigate(['/login']);
      });
  }

  // Register method
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('Registration Successful');
        this.router.navigate(['/login']);
      })
      .catch(err => {
        alert(err.message);
        this.router.navigate(['/register']);
      });
  }

  // Logout method
  logout() {
    this.fireauth.signOut()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(err => {
        alert(err.message);
        this.router.navigate(['/login']);
      });
  }
}

