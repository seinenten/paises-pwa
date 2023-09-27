import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesComponent } from './pages/paises/paises.component';
import { PaisComponent } from './pages/pais/pais.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'inicio', pathMatch: 'full'
  },
  {
    path: 'inicio', component: PaisesComponent
  },
  {
    path: 'pais/:id', component: PaisComponent
  },
  {
    path: '**', redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
