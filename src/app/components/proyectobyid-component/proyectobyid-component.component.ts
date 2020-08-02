import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { Proyecto } from '../../models/proyecto';
import { report } from 'process';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-proyectobyid-component',
  templateUrl: './proyectobyid-component.component.html',
  styleUrls: ['./proyectobyid-component.component.css']
})
export class ProyectobyidComponentComponent implements OnInit {

  public proyectoRegistrado : Proyecto;
  public proyectosEncontrados : any = [];
  public path;
  public proyectoId;

  constructor(
    private proyectoService : ProyectoService, 
    private routeParams: ActivatedRoute,
    private router : Router,
    ) {
    this.proyectoRegistrado = new Proyecto();
  }

  ngOnInit(): void {
    this.path = this.routeParams.snapshot.url[0].path;

    if (this.path == 'proyecto'){
      this.proyectoId = this.routeParams.snapshot.paramMap.get('idProyecto');
      this.encontrarProyectobyId();
    } 

    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
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

}


