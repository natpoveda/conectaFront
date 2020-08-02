import { Component, OnInit } from '@angular/core';

import { Usuarios } from '../../models/usuarios';
import { UsuariosService } from  '../../services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  public usuariosRegistrado: Usuarios;
  public usuariosEncontrados: any =[];
  public proyectoId;

  constructor(
    private usuarioService: UsuariosService,
    private routeParams: ActivatedRoute,
    private router : Router
    ) {
    this.usuariosRegistrado = new Usuarios()
   }

  ngOnInit(): void {
    this.proyectoId = this.routeParams.snapshot.paramMap.get('idProyecto');
  }

  // Consumir Servicio crearUsuario con el metodo crearUsuario
  crearUsuario(){
    this.usuariosRegistrado.pid = this.proyectoId;
    this.usuarioService.crearUsuario(this.usuariosRegistrado).subscribe(
      (response: any) =>{
        let usuarios = response.usuario;
        this.usuariosRegistrado = usuarios;

        if(response.statusCode != 200){
          alert("Error al registrar Usuario");
        } else {
          alert("Registro Exitoso de Usuario");
          this.usuariosRegistrado = new Usuarios();
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
