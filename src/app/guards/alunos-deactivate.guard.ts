import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {
 

  canDeactivate(
    component: AlunoFormComponent,
    Route: ActivatedRouteSnapshot,
    State: RouterStateSnapshot,
  ): Observable<boolean>|Promise<boolean>|boolean {


    return component.podeMudarRota();
    
    // teste return (apagar depois)
    //return component.podeDesativar ? component.podeDesativar() : true;
  }
}