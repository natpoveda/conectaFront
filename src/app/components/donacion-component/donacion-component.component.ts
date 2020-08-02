import { Component, OnInit } from '@angular/core';

import { Donacion } from '../../models/donacion';
import { DonacionService } from '../../services/donacion.service';
import { report } from 'process';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-donacion-component',
  templateUrl: './donacion-component.component.html',
  styleUrls: ['./donacion-component.component.css']
})

export class DonacionComponentComponent implements OnInit {

  public donacionRegistrada : Donacion;
  public donacionesEncontradas : any =[];
  public proyectoId;

  constructor( private donacionService : DonacionService, private routeParams: ActivatedRoute, private router : Router) { 
    this.donacionRegistrada = new Donacion()
  }

  ngOnInit(): void {
    this.proyectoId = this.routeParams.snapshot.paramMap.get('idProyecto');
  }


  crearDonacion(){
    
    this.donacionRegistrada.pid = this.proyectoId;
    this.donacionService.crearDonacion(this.donacionRegistrada).subscribe(
      (response: any)=>{
    
        let donaciones = response.donacion;
        this.donacionRegistrada = donaciones;
     
        if(response.codeStatus != 200){
          alert ("Error al registrar la donacion");
        } else {
          alert ("Registro de donación exitosa");
          this.router.navigate(['/proyecto/'+this.proyectoId]); 
        }
        
        
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
