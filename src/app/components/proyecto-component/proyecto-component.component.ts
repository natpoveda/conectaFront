import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { Proyecto } from '../../models/proyecto';
import { report } from 'process';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-proyecto-component',
  templateUrl: './proyecto-component.component.html',
  styleUrls: ['./proyecto-component.component.css']
})
export class ProyectoComponentComponent implements OnInit {

  public proyectoRegistrado : Proyecto;
  public proyectosEncontrados : any=[];
  public path;
  public proyectoId;

  constructor(
    private proyectoService : ProyectoService, 
    private routeParams: ActivatedRoute,
    private router : Router,
    private service : AdminService
    ) {
    this.proyectoRegistrado = new Proyecto();
  }

  ngOnInit(): void {
    
    const adminLogged = localStorage.getItem("adminLogged");
    if (adminLogged != "true") {
      this.router.navigate(['/login']);
    } 

  }

  crearProyecto(){
    
    this.proyectoService.crearProyecto(this.proyectoRegistrado).subscribe(
       (response : any) =>{
         let proyectos = response.proyecto;
         this.proyectoRegistrado = proyectos;

         if(response.codeStatus != 200){
           alert('Error al registrar el proyecto');
         } else {
           alert('Registro de proyecto exitoso');
           this.router.navigate(['/manage-proyecto']);
         }
       },
       (error)=>{
        var errormensaje = <any>error;
        if(errormensaje != null){
          console.log(error);
        }
       }
    );
  }

  mostrarProyectos(){
    this.proyectoService.mostrarProyectos().subscribe(
      (response: any)=>{
        
        this.proyectosEncontrados = response.proyecto;
      },
      (error) =>{
        var errormensaje = <any>error;
        if(errormensaje != null){
          console.log(error);
        }
      }
    );
  }


  actualizarProyecto(proyecto){
    this.proyectoService.actualizarProyecto(proyecto.id,proyecto).subscribe(
      (response: any)=>{
        if(response.usuario){
          alert("El proyecto ha sido correctamente actualizado");
          this.router.navigate(['/manage-proyecto/']);
        } else {
          alert ("No fue posible actualizar el usuario");
        }
      },
      (error) =>{
        if(error != null) {
          console.log(error);
        }
      }
    );
  }

  eliminarProyecto(proyectoId){
    this.proyectoService.eliminarProyecto(proyectoId).subscribe(
      (response: any)=>{
        if(response.usuario){
          alert("El usuario ha sido correctamente borrado");
          this.mostrarProyectos();
        } else {
          alert ("No fue posible borrar al usuario");
        }
      },
      (error) =>{
        if(error != null) {
          console.log(error);
        }
      }
    );
  }

}
