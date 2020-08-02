import { Component, OnInit } from '@angular/core';
import { ContactanosService } from '../../services/contactanos.service';
import { Contactanos } from '../../models/contactanos';
import { report } from 'process';
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({
  selector: 'app-contactanos-component',
  templateUrl: './contactanos-component.component.html',
  styleUrls: ['./contactanos-component.component.css']
})
export class ContactanosComponentComponent implements OnInit {

  public contactenosRegistrado : Contactanos;
  public contactenosEncontrados : any = [];

  
  constructor(
    private contactenosService : ContactanosService,
    private routeParams: ActivatedRoute,
    private router : Router,
    ) {
      this.contactenosRegistrado = new Contactanos();
    }

  

  ngOnInit(): void {
  }

  crearContactanos(){
    this.contactenosService.crearContactanos(this.contactenosRegistrado).subscribe(
       (response : any) =>{
         let contactanos = response.contactanos;
         this.contactenosRegistrado = contactanos;

         if(response.codeStatus != 200){
           alert('Error al registrar el proyecto');
         } else {
           alert('Registro de mensaje exitoso');
           this.router.navigate(['/']);
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
