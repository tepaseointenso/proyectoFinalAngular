import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { ListadoComponent } from './components/listado/listado.component';
import { InfoComponent } from './components/info/info.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    ListadoComponent,
    InfoComponent,
    CarritoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule, 
    RouterModule.forRoot([
      {path: 'registro', component: RegistroComponent},
      {path: 'login', component: LoginComponent},
      {path: 'listado', component: ListadoComponent},
      {path: 'info', component: InfoComponent},
      {path: 'carrito', component: CarritoComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
