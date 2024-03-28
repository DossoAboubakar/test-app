import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthServiceService } from './app/shared/auth-service.service'; 
export const loggedInGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  const authService = inject(AuthServiceService); 
  const router = inject(Router)

  if (authService.isLogged) { 
    return true;
  }
  router.navigate(['/login'])
  return false;
};