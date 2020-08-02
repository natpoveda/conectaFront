import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable()
export class UsuariosService {
  url = 'http://localhost:4004/api/usuarios/';
  constructor(private _http: HttpClient) {}

  crearUsuario(usuarioNuevo) {
    console.log("userNew",usuarioNuevo);
    let params = JSON.stringify(usuarioNuevo);
    console.log("params",params);
    let options = {
      headers: new HttpHeaders({  'Content-Type': 'application/json' }),
    };

    return this._http.post(this.url, params, options).pipe(map((res) => res));
  }

  //servicio obtener usuarios

  obtenerUsuarios() {
    return this._http.get(this.url).pipe((res) => res);
  }
  //servicio actualizar usuario
  actualizarUsuario(idUsuario, usuarioActualizado) {
    let params = JSON.stringify(usuarioActualizado);
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this._http
      .put(this.url + idUsuario, params, options)
      .pipe(map((res) => res));
  }
  
  //servicio eliminar usuario
  eliminarUsuario(idUsuario) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this._http
      .delete(this.url + idUsuario, options)
      .pipe(map((res) => res));
  }

  mostrarUsuarioByProject(idProyecto){
    return this._http.get(this.url + 'reportes/' + idProyecto).pipe((res)=>res);
  }

  mostrarUsuarioByName(name){
    console.log("URL", this.url + 'search-name/' + name);
    return this._http.get(this.url + 'search-name/' + name).pipe((res)=>res);
  }

  mostrarUsuarioById(uId){
    return this._http.get(this.url + 'search-byId/' + uId).pipe((res)=>res);
  }
}
