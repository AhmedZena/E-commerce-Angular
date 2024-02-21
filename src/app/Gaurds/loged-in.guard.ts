import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
// inject
import { Injectable, inject } from '@angular/core';
export const logedInGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userAuthService = inject(UserAuthService);

  if (userAuthService.isUserLoggedIn) {
    return true;
  } else {
    router.navigate(['login']);
    alert('You are not logged in');
    return false;
  }
};
