import { Component, OnInit } from '@angular/core';
import { Donacion } from '../../models/donacion';
import { DonacionService } from '../../services/donacion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reportes-donacion-component',
  templateUrl: './reportes-donacion-component.component.html',
  styleUrls: ['./reportes-donacion-component.component.css']
})
export class ReportesDonacionComponentComponent implements OnInit {

  public donacionRegistrada : Donacion;
  public donacionesEncontradas : any =[];
  public idProyecto;

  constructor( private donacionService : DonacionService,
     private routeParams: ActivatedRoute,
     private router : Router) { 
    this.donacionRegistrada = new Donacion()
  }

  ngOnInit(): void {
    const adminLogged = localStorage.getItem("adminLogged");
    if (adminLogged != "true") {
      this.router.navigate(['/login']);
    } else {
    this.idProyecto = this.routeParams.snapshot.paramMap.get('idProyecto');
    this.mostrarDonacionesbyProject();
    }
  }

  mostrarDonacionesbyProject(){
    this.donacionService.mostrarDonacionByProject(this.idProyecto).subscribe(
      (response : any)=>{
        this.donacionesEncontradas = response.donacion;
        console.log("DE",this.donacionesEncontradas);
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
