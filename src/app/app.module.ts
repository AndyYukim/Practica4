import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './Paginas/heroes/heroes.component';
import { HeroeComponent } from './Paginas/heroe/heroe.component';
import { HeaderComponent } from './Comunes/header/header.component';
import { BuscarComponent } from './Paginas/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    HeaderComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
