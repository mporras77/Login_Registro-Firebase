import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FichaComponent } from './components/ficha/ficha.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},

  {path: 'login', component: LoginComponent},
  {path: 'registrar-usuario', component: RegistrarUsuarioComponent},
  {path: 'verificar-correo', component: VerificarCorreoComponent},
  {path: 'recuperar-password', component: RecuperarPasswordComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'ficha', component: FichaComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
