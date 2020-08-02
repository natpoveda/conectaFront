import { Component, OnInit } from '@angular/core';
import { Admin } from '../../models/admin';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-admin-management-component',
  templateUrl: './admin-management-component.component.html',
  styleUrls: ['./admin-management-component.component.css']
})
export class AdminManagementComponentComponent implements OnInit {

  public adminManagement :  Admin;
  public adminEncontrados : any = [];

  constructor( private adminManagementSer : AdminService,
    private routeParams: ActivatedRoute,
     private router : Router) { 
    this.adminEncontrados = new Admin();
  }

  ngOnInit(): void {
    const adminLogged = localStorage.getItem("adminLogged");
    if (adminLogged != "true") {
      this.router.navigate(['/login']);
    } else {
      this.mostrarAdmin();
    }
    
  }


  //Consumo del servicio Obteneradmins

  mostrarAdmin(){
    
    this.adminManagementSer.mostrarAdmin().subscribe(  
      (response: any) =>{
        this.adminEncontrados = response.admin
      },
      (error)=>{
        var errormensaje = <any>error;
        if(errormensaje != null){
          console.log(error);
        }
      }
    );
  }

  editarAdmin(admin){
      this.adminManagementSer.actualizarAdmin(admin._id,admin).subscribe(
        (response:any)=>{
          if(response.admin){
            alert("El admin ha sido correctamente actualizado");
          } else {
            alert ("No fue posible actualizar el admin");
          }
        },
        (error)=>{
          if(error != null){
            console.log(error);
          }
        }
      );
  }

  //Consumir el servicio de eliminar Tarea con el metodo eliminarAdmin
  eliminarAdmin(idAdmin){
    this.adminManagementSer.eliminarAdmin(idAdmin).subscribe(
      (response : any)=>{
        if(response.admin){
          alert("El admin ha sido correctamente borrado");
          this.mostrarAdmin();
        } else {
          alert ("No fue posible borrar el admin");
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
 
