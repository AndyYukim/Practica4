import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './Paginas/buscar/buscar.component';
import { HeroeComponent } from './Paginas/heroe/heroe.component';
import { HeroesComponent } from './Paginas/heroes/heroes.component';

const routes: Routes = [

  {path:'', component:HeroesComponent}, 
  {path:'heroes', component:HeroesComponent},
  {path:'heroe/:id', component:HeroeComponent},
  {path:'buscar/:textoFinal', component:BuscarComponent},
  {path:'**', component:HeroesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
