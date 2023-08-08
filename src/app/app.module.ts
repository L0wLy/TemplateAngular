import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InstalacionesComponent } from './instalaciones/instalaciones.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NosotrosComponent,
    InstalacionesComponent,
    EquipoComponent,
    ContactoComponent,
    CursosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
