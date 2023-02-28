import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './content/inicio/inicio.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroComponent } from './registro/registro.component';
import { SesionComponent } from './sesion/sesion.component';
import { PracticasComponent } from './practicas/practicas.component';
import { CargarscriptsService } from './cargarscripts.service';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './content/portafolio/portafolio.component';
import { DocenteComponent } from './content/docente/docente.component';
import { PreciosComponent } from './content/precios/precios.component';
import { CursosComponent } from './content/cursos/cursos.component';

const appRoutes: Routes=[
  { path:'', component: InicioComponent},
  { path:'inicio', component:InicioComponent},
  { path:'portafolio', component:PortafolioComponent},
  { path:'docente', component:DocenteComponent},
  { path:'precios', component:PreciosComponent},
  { path:'cursos', component:CursosComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    ContentComponent,
    FooterComponent,
    NavbarComponent,
    RegistroComponent,
    SesionComponent,
    PracticasComponent,
    PortafolioComponent,
    DocenteComponent,
    PreciosComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
    
  ],
  providers: [
    CargarscriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
