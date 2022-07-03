import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BuscarComponent } from './screens/buscar/buscar.component';
import { DescubrirComponent } from './screens/descubrir/descubrir.component';
import { FavoritosComponent } from './screens/favoritos/favoritos.component';
import { FormularioComponent } from './screens/formulario/formulario.component';
import { HomeComponent } from './screens/home/home.component';
import { PlaylistComponent } from './screens/playlist/playlist.component';
import { SignupComponent } from './screens/signup/signup.component';
import { AuthGuard } from './services/auth.guard';
import { AdministracionComponent } from './screens/administracion/administracion.component';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: '/formulario', pathMatch: 'full' },
  { path: 'app-header', component: HeaderComponent, },
  { path: 'app-footer', component: FooterComponent },
  { path: 'buscar', component: BuscarComponent, canActivate: [AuthGuard] },
  { path: 'descubrir', component: DescubrirComponent, canActivate: [AuthGuard]},
  { path: 'favoritos', component: FavoritosComponent, canActivate: [AuthGuard]},
  { path: 'formulario', component: FormularioComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'playlist', component: PlaylistComponent, canActivate: [AuthGuard]},
  { path: 'signup', component: SignupComponent},
  { path: 'administracion', component: AdministracionComponent, canActivate:[AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
