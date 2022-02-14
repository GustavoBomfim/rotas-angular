import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { IformCandeactivate } from './Iform-candeactivate';


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IformCandeactivate> {
 

  canDeactivate(
    component: IformCandeactivate,
    Route: ActivatedRouteSnapshot,
    State: RouterStateSnapshot,
  ): Observable<boolean>|Promise<boolean>|boolean {

    return component.podeDesativar();
    //return component.podeMudarRota();
    
    // teste return (apagar depois)
    //return component.podeDesativar ? component.podeDesativar() : true;
  }
}

