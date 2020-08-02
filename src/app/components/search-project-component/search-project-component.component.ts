import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { Proyecto } from '../../models/proyecto';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search-project-component',
  templateUrl: './search-project-component.component.html',
  styleUrls: ['./search-project-component.component.css']
})

export class SearchProjectComponentComponent implements OnInit {

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
    } 

  }

  searchProyecto(event){

    let titulo = event.target.value;

    switch (titulo) {
      case '':
      case '*':  
        this.proyectoService.mostrarProyectos().subscribe(
          
          (response: any)=>{
            this.proyectosEncontrados = response.proyecto;
          },
          (error) =>{
            var errormensaje = <any>error;
            if(errormensaje){
              console.log(error);
            }
          }
        )
      break;
      default:
        this.proyectoService.encontrarProyectobyTitulo(titulo).subscribe(
          (response: any)=>{
            this.proyectosEncontrados = response.proyecto;
            
          },
          (error) =>{
            var errormensaje = <any>error;
            if(errormensaje){
              console.log(error);
            }
          }
        );
      
      break;
    }
   
  }

 
}


