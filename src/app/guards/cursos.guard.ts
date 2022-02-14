import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable()
export class CursosGuard implements CanActivateChild {
   
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Observable<boolean> | boolean {

    return true;
  }
}