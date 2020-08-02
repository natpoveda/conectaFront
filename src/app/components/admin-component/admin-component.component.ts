import { Component, OnInit } from '@angular/core';
import { Admin } from '../../models/admin';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css']
})
export class AdminComponentComponent implements OnInit {

  public adminRegistrado: Admin;
 
  constructor(private adminService : AdminService,
    private routeParams: ActivatedRoute,
     private router : Router) {
    this.adminRegistrado = new Admin()
   }

  ngOnInit(): void {
    const adminLogged = localStorage.getItem("adminLogged");
    if (adminLogged != "true") {
      this.router.navigate(['/login']);
    }
  }

  crearAdmin(){
    
    this.adminService.crearAdmin(this.adminRegistrado).subscribe(
      (response: any) => {
        let admins = response.admin;
        this.adminRegistrado = admins;
        if(response.statusCode != 200){
          alert("Error al registrar al nuevo admin");
        } else {
          alert("Registro Exitoso de admin");
          this.adminRegistrado = new Admin()
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
