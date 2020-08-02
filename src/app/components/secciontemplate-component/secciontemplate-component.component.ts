import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { Proyecto } from '../../models/proyecto';
import { report } from 'process';
import { ActivatedRoute, Router } from '@angular/router';
import { SeccionService } from '../../services/seccion.service';


@Component({
  selector: 'app-secciontemplate-component',
  templateUrl: './secciontemplate-component.component.html',
  styleUrls: ['./secciontemplate-component.component.css']
})
export class SecciontemplateComponentComponent implements OnInit {

  public proyectoRegistrado : Proyecto;
  public proyectosEncontrados : any=[];
  public path;
  public idSeccion;
  public seccionesEncontradas : any=[];


  constructor(
    private proyectoService : ProyectoService, 
    private routeParams: ActivatedRoute,
    private router : Router,
    private seccionService : SeccionService
    ) {
    this.proyectoRegistrado = new Proyecto();
  }

  ngOnInit(): void {
    this.path = this.routeParams.snapshot.url[0].path;
    if (this.path == 'seccion'){
      this.idSeccion = this.routeParams.snapshot.paramMap.get('idSeccion');
      this.encontrarProyectosbySecc();
    } 
  }


  encontrarProyectosbySecc(){
    this.encontrarSeccionbyID();
    this.proyectoService.obtenerProyectoByIdSeccion(this.idSeccion).subscribe(
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

  encontrarSeccionbyID(){
    this.seccionService.mostrarSeccionbyId(this.idSeccion).subscribe(
      (response: any)=>{
        this.seccionesEncontradas = response.seccion;
      
      },
      (error) =>{
        var errormensaje = <any>error;
        if(errormensaje){
          console.log(error);
        }
      }
    );
  }

}
