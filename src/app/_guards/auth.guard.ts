import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { SessionService, AlertService } from '../_services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private alertService: AlertService,
    private sessionService: SessionService) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.sessionService.token) {
      return true;
    }

    this.alertService.error('Please log in to view that page.', true);
    this.router.navigate(['/login'], { queryParams: { redirectUrl: state.url }});

    return false;
  }
}