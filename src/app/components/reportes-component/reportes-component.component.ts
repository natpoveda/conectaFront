import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../models/usuarios';
import { UsuariosService } from  '../../services/usuarios.service';
import { report } from 'process';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-reportes-component',
  templateUrl: './reportes-component.component.html',
  styleUrls: ['./reportes-component.component.css']
})
export class ReportesComponentComponent implements OnInit {

  public usuariosRegistrado: Usuarios;
  public usuariosEncontrados: any = [];
  public idProyecto;
  public path;

  constructor(private usuarioService: UsuariosService, 
    private routeParams: ActivatedRoute,
    private router : Router) {
    this.usuariosRegistrado = new Usuarios()
   }

  ngOnInit(): void {
    const adminLogged = localStorage.getItem("adminLogged");
    if (adminLogged != "true") {
      this.router.navigate(['/login']);
    } else {
        this.idProyecto = this.routeParams.snapshot.paramMap.get('idProyecto');
        this.mostrarUsuariosbyProject();
    }
    
    
  }

  mostrarUsuariosbyProject(){
    this.usuarioService.mostrarUsuarioByProject(this.idProyecto).subscribe(
      (response : any)=>{
        this.usuariosEncontrados = response.usuario;        
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
