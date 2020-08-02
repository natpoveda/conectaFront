import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SeccionService {

  urlApi = "http://localhost:4004/api/secciones";

  constructor( private _http: HttpClient) {}

  crearSeccion(seccionNueva){
    let params = JSON.stringify(seccionNueva);
    let options = {
      headers: new HttpHeaders({  'Content-Type': 'application/json' }),
    };

    return this._http.post(this.urlApi,params,options).pipe(map((res)=>res)); 
  }

  mostrarSeccion(){
   return this._http.get(this.urlApi).pipe((res)=>res);
  }

  mostrarSeccionbyId(idSeccion){
    return this._http.get(this.urlApi + "/seccionbyid/" + idSeccion).pipe((res)=>res);
  }

  actualizarSeccion(idSeccion, seccionActualizado) {
    let params = JSON.stringify(seccionActualizado);
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this._http
      .put(this.urlApi + '/' + idSeccion, params, options)
      .pipe( map((res)=>res));
  }

  eliminarSeccion(idSeccion) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this._http.delete(this.urlApi + '/'+ idSeccion, options).pipe(map((res)=>res));
  }

  mostrarSeccionbyName(name){
    return this._http.get(this.urlApi + "/seccionbyname/" + name).pipe((res)=>res);
  }

}
