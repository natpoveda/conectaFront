import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { Proyecto } from '../../models/proyecto';
import { SeccionService } from '../../services/seccion.service';
import { Seccion } from '../../models/seccion';
import { report } from 'process';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homesecciones-component',
  templateUrl: './homesecciones-component.component.html',
  styleUrls: ['./homesecciones-component.component.css']
})
export class HomeseccionesComponentComponent implements OnInit {

  public proyectoRegistrado : Proyecto;
  public proyectosEncontrados : any=[];
  public seccionesEncontradas : any=[];
  public path;
  public idSeccion;

  constructor(
    private proyectoService : ProyectoService, 
    private routeParams: ActivatedRoute,
    private router : Router,
    private seccionService : SeccionService
    ) {
    this.proyectoRegistrado = new Proyecto();
  }

  ngOnInit(): void {
    this.encontrarProyectosbySeccHomeLimit();   
  }

  encontrarProyectosbySeccHomeLimit(){

    let arrSecc = Array();
    let arrProy = Array();
    var PS = this.proyectoService;
    var PE = this.seccionesEncontradas;
    this.seccionService.mostrarSeccion().subscribe(
      (response: any) =>{
        arrSecc = response.seccion;

        arrSecc.forEach(secc => {
         
          this.proyectoService.obtenerProyectoByIdSeccionLimit(secc._id).subscribe(
              (response: any)=>{
                var rObj = {"seccion": secc.nombre, "proyecto": response.proyecto};
                arrProy.push(rObj);
                
              },
              (error) =>{
                var errormensaje = <any>error;
                if(errormensaje != null){
                  console.log(error);
                }
              } 
          );
        });
        
        this.proyectosEncontrados = arrProy;
      },
      (error)=>{
        var errormensaje = <any>error;
        if(errormensaje != null){
          console.log(error);
        }
      }
    );

  }

}
