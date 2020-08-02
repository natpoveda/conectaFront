import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  apiURL = "http://localhost:4004/api/proyecto"

  constructor( private _http: HttpClient) {}

  crearProyecto(proyectoNuevo){
    let params = JSON.stringify(proyectoNuevo);
    let options = {
      headers : new HttpHeaders({ 'Content-Type' : 'application/json' }),
    };

    return this._http.post(this.apiURL,params,options).pipe(map((res)=>res));
  }

  mostrarProyectos(){
    console.log("Mostrar Proyectos");
    return this._http.get(this.apiURL).pipe((res)=>res);
  }

  encontrarProyectobyId(proyectoId){
    return this._http.get(this.apiURL + '/' + proyectoId).pipe(map((res)=>res));
  }

  actualizarProyecto(proyectoId,proyectoActualizado){
    let params =  JSON.stringify(proyectoActualizado);
    let options = {
      headers : new HttpHeaders({ 'Content-Type' : 'application/json' }),
    };

    return this._http.put(this.apiURL + '/' + proyectoId, params, options).pipe(map((res)=>res));
  }

  eliminarProyecto(proyectoId){
    let options = {
      headers : new HttpHeaders({ 'Content-Type' : 'application/json' }),
    };

    return this._http.delete(this.apiURL + '/' + proyectoId , options).pipe(map((res)=>res));
  }

  obtenerProyectoByIdSeccion(idSeccion){
    return this._http.get(this.apiURL + '/secc/' + idSeccion).pipe(map((res)=>res));
  }

  obtenerProyectoByIdSeccionLimit(idSeccion){
    return this._http.get(this.apiURL + '/secclimit/' + idSeccion).pipe(map((res)=>res));
  }

  encontrarProyectobyTitulo(titulo){
    return this._http.get(this.apiURL + '/proyectobytitle/' + titulo).pipe(((res)=>res));
  }

}
