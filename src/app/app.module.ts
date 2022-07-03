import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { BuscarComponent } from './screens/buscar/buscar.component';
import { DescubrirComponent } from './screens/descubrir/descubrir.component';
import { FavoritosComponent } from './screens/favoritos/favoritos.component';
import { FormularioComponent } from './screens/formulario/formulario.component';
import { PlaylistComponent } from './screens/playlist/playlist.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerComponent } from './pages/player/player.component';
import { SignupComponent } from './screens/signup/signup.component';

import { AuthGuard } from './services/auth.guard';
import { AdministracionComponent } from './screens/administracion/administracion.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    DescubrirComponent,
    FavoritosComponent,
    FormularioComponent,
    PlaylistComponent,
    HeaderComponent,
    FooterComponent,
    PlayerComponent,
    SignupComponent,
    AdministracionComponent,
    FilterPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
