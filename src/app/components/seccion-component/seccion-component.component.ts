import { Component, OnInit } from '@angular/core';
import { Seccion } from '../../models/seccion';
import { SeccionService } from '../../services/seccion.service';
import { report } from 'process';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-seccion-component',
  templateUrl: './seccion-component.component.html',
  styleUrls: ['./seccion-component.component.css']
})
export class SeccionComponentComponent implements OnInit {

  public seccionRegistrada : Seccion;
  public seccionesEncontradas : any = [];
  public adminLogged;

  constructor(private seccionService : SeccionService,
    private routeParams: ActivatedRoute,
    private router : Router) { 
    this.seccionRegistrada = new Seccion();
  }

  ngOnInit(): void {
    this.adminLogged = localStorage.getItem("adminLogged");
    if (this.adminLogged != "true") {
      this.router.navigate(['/login']);
    } 
  }

  crearSeccion(){
  
    this.seccionService.crearSeccion(this.seccionRegistrada).subscribe(
      (response: any)=>{
        let secciones = response.seccion;
        this.seccionRegistrada = secciones;
       
        if(response.codeStatus != 200){
          alert ("Error al registrar el usuario");
          this.router.navigate(['/manage-proyecto']);
        } else {
          alert ("Registro de usuario exitoso");
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

}
