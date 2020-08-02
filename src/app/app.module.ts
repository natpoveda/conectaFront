import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { YouTubePlayerModule } from "@angular/youtube-player";

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuariosService } from './services/usuarios.service';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { AdminService } from './services/admin.service';
import { UserComponentComponent } from './components/user-component/user-component.component';
import { AdminComponentComponent } from './components/admin-component/admin-component.component';
import { AdminManagementComponentComponent } from './components/admin-management-component/admin-management-component.component';
import { DonacionComponentComponent } from './components/donacion-component/donacion-component.component';
import { SeccionComponentComponent } from './components/seccion-component/seccion-component.component';
import { SeccionService } from './services/seccion.service';
import { DonacionService } from './services/donacion.service';
import { ProyectoComponentComponent } from './components/proyecto-component/proyecto-component.component';
import { ProyectoService } from './services/proyecto.service';
import { ProyectobyidComponentComponent } from './components/proyectobyid-component/proyectobyid-component.component';
import { SecciontemplateComponentComponent } from './components/secciontemplate-component/secciontemplate-component.component';
import { HomeseccionesComponentComponent } from './components/homesecciones-component/homesecciones-component.component';
import { ReportesComponentComponent } from './components/reportes-component/reportes-component.component';
import { ReportesDonacionComponentComponent } from './components/reportes-donacion-component/reportes-donacion-component.component';
import { SearchProjectComponentComponent } from './components/search-project-component/search-project-component.component';
import { UpdateProjectComponentComponent } from './components/update-project-component/update-project-component.component';
import { SearchUsersComponentComponent } from './components/search-users-component/search-users-component.component';
import { SearchSeccionesComponentComponent } from './components/search-secciones-component/search-secciones-component.component';
import { SeccionesUpdateComponentComponent } from './components/secciones-update-component/secciones-update-component.component';
import { ContactanosManageComponentComponent } from './components/contactanos-manage-component/contactanos-manage-component.component';
import { ContactanosComponentComponent } from './components/contactanos-component/contactanos-component.component';
import { QsomosComponentComponent } from './components/qsomos-component/qsomos-component.component';

const appRoutes: Routes = [
  { path:'', component: HomeComponentComponent },
  { path:'login', component: LoginComponentComponent },
  { path:'logout', component: LoginComponentComponent },
  { path:'user/:uId', component: UsuariosComponent },
  { path:'register/:idProyecto', component: UserComponentComponent },
  { path:'register-admin', component: AdminComponentComponent },
  { path:'management-admin', component: AdminManagementComponentComponent },
  { path:'donacion/:idProyecto', component: DonacionComponentComponent },
  { path:'seccion-register', component: SeccionComponentComponent },
  { path:'proyecto-register', component: ProyectoComponentComponent },
  { path:'proyecto/:idProyecto', component: ProyectobyidComponentComponent },
  { path:'seccion/:idSeccion', component: SecciontemplateComponentComponent },
  { path:'test', component: HomeseccionesComponentComponent },
  { path:'reportes/:idProyecto', component: ReportesComponentComponent },
  { path:'reportes-donaciones/:idProyecto', component: ReportesDonacionComponentComponent },
  { path:'manage-proyecto', component: SearchProjectComponentComponent },
  { path:'update-proyecto/:idProyecto', component: UpdateProjectComponentComponent },
  { path:'delete-proyecto/:idProyecto', component: UpdateProjectComponentComponent },
  { path:'manage-usuarios', component: SearchUsersComponentComponent },
  { path:'manage-secciones', component: SearchSeccionesComponentComponent },
  { path:'update-seccion/:idSeccion', component: SeccionesUpdateComponentComponent },
  { path:'manage-contactenos', component: ContactanosManageComponentComponent },
  { path:'delete-contactanos/:id', component: ContactanosManageComponentComponent },
  { path:'contactanos', component: ContactanosComponentComponent },
  { path:'quienes-somos', component: QsomosComponentComponent }
  

]

@NgModule({
  declarations: [AppComponent, UsuariosComponent, MenuComponentComponent, FooterComponentComponent, HomeComponentComponent, LoginComponentComponent, UserComponentComponent, AdminComponentComponent, AdminManagementComponentComponent, DonacionComponentComponent, SeccionComponentComponent, ProyectoComponentComponent, ProyectobyidComponentComponent, SecciontemplateComponentComponent, HomeseccionesComponentComponent, ReportesComponentComponent, ReportesDonacionComponentComponent, SearchProjectComponentComponent, UpdateProjectComponentComponent, SearchUsersComponentComponent, SearchSeccionesComponentComponent, SeccionesUpdateComponentComponent, ContactanosManageComponentComponent, ContactanosComponentComponent, QsomosComponentComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes),YouTubePlayerModule],
  providers: [UsuariosService, AdminService, SeccionService, DonacionService, ProyectoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
