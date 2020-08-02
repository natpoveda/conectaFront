import { Component, OnInit } from '@angular/core';
import { SeccionService} from '../../services/seccion.service';
import { Seccion } from '../../models/seccion';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search-secciones-component',
  templateUrl: './search-secciones-component.component.html',
  styleUrls: ['./search-secciones-component.component.css']
})
export class SearchSeccionesComponentComponent implements OnInit {

  public nombre;
  public seccionesEncontradas : any=[];
  public secId;
  public path;


  constructor(private seccionService : SeccionService, 
    private routeParams: ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
  }


  searchSeccion(event){

    console.log(event);
    let name = event.target.value;
    console.log(name);

    switch (name) {
      case '':
      case '*':  
        this.seccionService.mostrarSeccion().subscribe(
          (response: any)=>{
            this.seccionesEncontradas = response.seccion;
            
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
        this.seccionService.mostrarSeccionbyName(name).subscribe(
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
      
      break;
    }
   
  }

}
