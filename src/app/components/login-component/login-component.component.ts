import { Component, OnInit } from '@angular/core';
import { Admin } from '../../models/admin';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  public admin: Admin;
  public path;
  public adminLogged;
  public mail;
  
  
  constructor(
    private service: AdminService,
    private routeParams: ActivatedRoute,
    private router : Router,
    private locate: Location
  ) {
    this.admin = new Admin();
   }

  ngOnInit(): void {
    
    this.adminLogged = localStorage.getItem("adminLogged");
    if (this.adminLogged != "true") {
      this.router.navigate(['/login']);
    } else {     
      this.logout();  
    }
    
  }

  login(admin){
    this.service.loginAdmin(admin).subscribe( (res: any ) =>{
      if(res.statusCode === 200){
        localStorage.setItem("adminLogged","true");
        localStorage.setItem("adminMail", String(admin.email));
        console.log("email",admin);
        alert ("Bienvenid@");
        this.router.navigate(['/manage-proyecto']);     
        
      }else {
        alert("Mail o Contraseña no coinciden")
        localStorage.setItem("adminLogged","false");
      }
    })
  }

  logout(){
    localStorage.setItem("adminLogged","false");
    localStorage.removeItem("adminLogged");
    localStorage.removeItem("adminMail");
    this.router.navigate(['/']);

  }

}
