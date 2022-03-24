import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { InfoComponent } from './components/info/info.component';
import { ListadoComponent } from './components/listado/listado.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'listado', component: ListadoComponent},
  {path: 'info', component: InfoComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'carrito/:id', component: CarritoComponent},
  {path: '', component: CarritoComponent},
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
