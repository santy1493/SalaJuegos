import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoComponent } from './Vistas/juego/juego.component';
import { SobreMiComponent } from './Vistas/sobre-mi/sobre-mi.component';

const routes: Routes = [
  {path:'', component:SobreMiComponent},
  {path:'juego', component:JuegoComponent ,children:[
    {path:'nuevo', component:JuegoComponent},
    {path:'dos', component:JuegoComponent}
  ]},
  {path:'**', component:JuegoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
