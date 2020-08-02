import { Component, OnInit } from '@angular/core';
import { Contactanos } from '../../models/contactanos';
import { ContactanosService } from '../../services/contactanos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contactanos-manage-component',
  templateUrl: './contactanos-manage-component.component.html',
  styleUrls: ['./contactanos-manage-component.component.css']
})
export class ContactanosManageComponentComponent implements OnInit {

  public contactanosadminManagement :  Contactanos;
  public contactanosEncontrados : any = [];
  public id;
  public path;

  constructor( private contactanosService : ContactanosService,
    private routeParams: ActivatedRoute,
     private router : Router) { 
    this.contactanosEncontrados = new Contactanos();
  }

  ngOnInit(): void {

    const adminLogged = localStorage.getItem("adminLogged");
    if (adminLogged != "true") {
      this.router.navigate(['/login']);
    } else {

      this.path = this.routeParams.snapshot.url[0].path;
      if (this.path == 'delete-contactanos'){
        this.id = this.routeParams.snapshot.paramMap.get('id');
        
        this.eliminarContactenos(this.id);
      } else {
        this.mostrarContactanos();
      }
    
    }

  }

  //Consumo del servicio Obteneradmins

  mostrarContactanos(){  
    this.contactanosService.mostrarContactanoss().subscribe(  
      (response: any) =>{
        this.contactanosEncontrados = response.contactanos
      },
      (error)=>{
        var errormensaje = <any>error;
        if(errormensaje != null){
          console.log(error);
        }
      }
    );
  }

   //Consumir el servicio de eliminar Tarea con el metodo eliminarAdmin
   eliminarContactenos(id){
    this.contactanosService.eliminarContactanos(id).subscribe(
      (response : any)=>{
        if(response.contactanos){
          console.log("Si Borro");
          alert("El mensaje ha sido correctamente borrado");
          this.router.navigate(['/manage-contactenos']);
        } else {
          alert ("No fue posible borrar el mensaje");
        }
      },
      (error) =>{
        if(error != null){
          console.log(error);
        }
      }
    );
  }

}
