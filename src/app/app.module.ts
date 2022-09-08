import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoComponent } from './Vistas/juego/juego.component';
import { BienvenidoComponent } from './Vistas/bienvenido/bienvenido.component';
import { SobreMiComponent } from './Vistas/sobre-mi/sobre-mi.component';
import { MenuComponent } from './Vistas/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    BienvenidoComponent,
    SobreMiComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
