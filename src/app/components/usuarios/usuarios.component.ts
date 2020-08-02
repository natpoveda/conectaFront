import { Component, OnInit } from '@angular/core';

import { Usuarios } from '../../models/usuarios';
import { UsuariosService } from  '../../services/usuarios.service';
import { report } from 'process';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public usuariosRegistrado: Usuarios;
  public usuariosEncontrados: any = [];
  public adminLogged;
  public uId;

  constructor(private usuarioService: UsuariosService,
    private routeParams: ActivatedRoute,
    private router : Router) {
    this.usuariosRegistrado = new Usuarios()
   }

  ngOnInit(): void {
    this.adminLogged = localStorage.getItem("adminLogged");
    if (this.adminLogged != "true") {
      this.router.navigate(['/login']);
    } else {     
     this.uId = this.routeParams.snapshot.paramMap.get('uId');
     this.mostrarUsuariosbyId();
    }
  }


  //Consumo del servicio Obtenerusuarios

  mostrarUsuariosbyId(){
    this.usuarioService.mostrarUsuarioById(this.uId).subscribe(
        (response: any)=>{
          this.usuariosEncontrados = response.usuario;
        },
        (error) =>{
          var errormensaje = <any>error;
          if(errormensaje != null){
            console.log(error);
          }
        }
      );
  }

  //Consumir  el servicio con el actualizarUsuario
  editarUsuario(usuario){
    this.usuarioService.actualizarUsuario(usuario._id, usuario).subscribe(
        (response: any)=>{
          if(response.usuario){
            alert("El usuario ha sido correctamente actualizado");
          } else {
            alert ("No fue posible actualizar el usuario");
          }
        },
        (error) =>{
          if(error != null) {
            console.log(error);
          }
        }
    );
  }

  //Consumir el servicio de eliminar Tarea con el metodo eliminarUsuario

  eliminarUsuario(uId){
    this.usuarioService.eliminarUsuario(uId).subscribe(
      (response: any)=>{
        if(response.usuario){
          alert("El usuario ha sido correctamente borrado");
          this.router.navigate(['/manage-usuarios']); 
        } else {
          alert ("No fue posible borrar al usuario");
        }
      },
      (error) =>{
        if(error != null) {
          console.log(error);
        }
      }
    );
  }
}
