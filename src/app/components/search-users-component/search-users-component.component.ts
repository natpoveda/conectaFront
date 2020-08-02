import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuarios } from '../../models/usuarios';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-users-component',
  templateUrl: './search-users-component.component.html',
  styleUrls: ['./search-users-component.component.css']
})
export class SearchUsersComponentComponent implements OnInit {

  public nombre;
  public usuariosEncontrados : any=[];
  public userId;
  public path;

  constructor(private usuarioService : UsuariosService, 
    private routeParams: ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
  }

  searchUser(event){

    console.log(event);
    let name = event.target.value;
    console.log(name);

    switch (name) {
      case '':
      case '*':  
        this.usuarioService.obtenerUsuarios().subscribe(
          (response: any)=>{
            this.usuariosEncontrados = response.usuario;
           
          },
          (error) =>{
            var errormensaje = <any>error;
            if(errormensaje){
              console.log(error);
            }
          }
        )
      break;
      default:
        this.usuarioService.mostrarUsuarioByName(name).subscribe(
          (response: any)=>{
            this.usuariosEncontrados = response.usuario;
            
          },
          (error) =>{
            var errormensaje = <any>error;
            if(errormensaje){
              console.log(error);
            }
          }
        );
      
      break;
    }
   
  }


}
