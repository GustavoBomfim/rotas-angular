import { observable, Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosGuard implements CanActivateChild {
   
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Observable<boolean> | boolean {

    if(state.url.includes('editar')){
        alert('usuário sem acesso');
        //return Observable.of(false);
    }
    return true;
  }
}