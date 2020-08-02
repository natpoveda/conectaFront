import { Component, OnInit } from '@angular/core';
import { Seccion } from '../../models/seccion';
import { SeccionService } from '../../services/seccion.service';
import { report } from 'process';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-secciones-update-component',
  templateUrl: './secciones-update-component.component.html',
  styleUrls: ['./secciones-update-component.component.css']
})
export class SeccionesUpdateComponentComponent implements OnInit {

  public seccionesRegistradas : Seccion;
  public seccionesEncontradas: any = [];
  public adminLogged;
  public secId;

  constructor(private seccionService: SeccionService,
    private routeParams: ActivatedRoute,
    private router : Router) { 
      this.seccionesRegistradas = new Seccion()
    }

  ngOnInit(): void {
    this.adminLogged = localStorage.getItem("adminLogged");
    if (this.adminLogged != "true") {
      this.router.navigate(['/login']);
    } else {     
     this.secId = this.routeParams.snapshot.paramMap.get('idSeccion');
     this.mostrarSeccionbyId();
    }
  }

  
  //Consumo del servicio ObtenerseccionesbyId

  mostrarSeccionbyId(){
    this.seccionService.mostrarSeccionbyId(this.secId).subscribe(
        (response: any)=>{
          this.seccionesEncontradas = response.seccion;
        },
        (error) =>{
          var errormensaje = <any>error;
          if(errormensaje != null){
            console.log(error);
          }
        }
      );
  }

  //Consumir  el servicio con el actualizarseccion
  editarSeccion(seccion){
    this.seccionService.actualizarSeccion(seccion._id, seccion).subscribe(
        (response: any)=>{
          if(response.seccion){
            alert("La seccion ha sido correctamente actualizada");
            this.router.navigate(['/manage-secciones']); 
          } else {
            alert ("No fue posible actualizar La seccion");
          }
        },
        (error) =>{
          if(error != null) {
            console.log(error);
          }
        }
    );
  }

  //Consumir el servicio de eliminar Tarea con el metodo eliminarseccion

  eliminarSeccion(secId){
    this.seccionService.eliminarSeccion(secId).subscribe(
      (response: any)=>{
        if(response.seccion){
          alert("La seccion ha sido correctamente borrada");
          this.router.navigate(['/manage-secciones']); 
        } else {
          alert ("No fue posible borrar al seccion");
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
