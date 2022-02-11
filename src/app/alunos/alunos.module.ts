import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlunosComponent } from './alunos.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

@NgModule({
    imports: [
        CommonModule,
        AlunosRoutingModule
    ],
    exports: [],
    declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
    providers: [],
})
export class AlunosModule { }