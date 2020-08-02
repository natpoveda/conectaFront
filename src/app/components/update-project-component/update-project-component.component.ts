import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { Proyecto } from '../../models/proyecto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-project-component',
  templateUrl: './update-project-component.component.html',
  styleUrls: ['./update-project-component.component.css']
})
export class UpdateProjectComponentComponent implements OnInit {

  public titulo;
  public proyectosEncontrados : any=[];
  public proyectoId;
  public path;

  constructor(
    private proyectoService : ProyectoService, 
    private routeParams: ActivatedRoute,
    private router : Router,
  ){}

  ngOnInit(): void {
    const adminLogged = localStorage.getItem("adminLogged");
    if (adminLogged != "true") {
      this.router.navigate(['/login']);
    } else {
      
      this.path = this.routeParams.snapshot.url[0].path;
      if (this.path == 'delete-proyecto'){

        this.proyectoId = this.routeParams.snapshot.paramMap.get('idProyecto');
        this.eliminarProyectobyId(this.proyectoId);
      }
      if (this.path == 'update-proyecto'){
        this.proyectoId = this.routeParams.snapshot.paramMap.get('idProyecto');
        this.encontrarProyectobyId();
      }
    }

  }

  encontrarProyectobyId(){
    this.proyectoService.encontrarProyectobyId(this.proyectoId).subscribe(
      (response: any)=>{
        this.proyectosEncontrados.push(response.proyecto);
      },
      (error) =>{
        var errormensaje = <any>error;
        if(errormensaje != null){
          console.log(error);
        }
      }
    );
  }

  actualizarProyectobyId(proyecto){
      this.proyectoService.actualizarProyecto(proyecto._id,proyecto).subscribe(
        (response:any)=>{
          if(response.proyecto){
            alert("El proyecto ha sido correctamente actualizado");
            this.router.navigate(['/manage-proyecto']);
          } else {
            alert ("No fue posible actualizar el proyecto");
          }
        },
        (error)=>{
          if(error != null){
            console.log(error);
          }
        }
      );
  }

  //Consumir el servicio de eliminar Tarea con el metodo eliminarproyecto
  eliminarProyectobyId(proyectoId){
    this.proyectoService.eliminarProyecto(proyectoId).subscribe(
      (response : any)=>{
        if(response.proyecto){
          alert("El proyecto ha sido correctamente borrado");
          this.router.navigate(['/manage-proyecto']);
        } else {
          alert ("No fue posible borrar el proyecto");
        }
      },
      (error) =>{
        if(error != null){
          console.log(error);
        }
      }
    );
  }

}
