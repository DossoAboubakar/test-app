import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthServiceService } from './app/services/auth-service.service'; 
export const loggedInGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  const authService = inject(AuthServiceService); 
  const router = inject(Router)
  const value = authService.isLogged
  console.log( ' value',value)

  if (value) { 
    console.log('voici la valeur ', value)
    return true;
  }
  else{
    router.navigate(['/login'])
  return false;
  }
  
};