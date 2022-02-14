import { NgModule } from '@angular/core';
//import { ModuleWithProviders } from '@angular/core';

//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from './guards/auth.guard';





const APP_ROUTES: Routes = [
    { path: 'cursos', loadChildren: () => import('../app/cursos/cursos.module').then ( x => x.CursosModule), canActivate: [AuthGuard]},
    { path: 'alunos', loadChildren: () => import('../app/alunos/alunos.module').then (x => x.AlunosModule), canActivate: [AuthGuard]},
    //{ path: 'cursos', component: CursosComponent},
    //{ path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'login', component: LoginComponent},
    //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule {}