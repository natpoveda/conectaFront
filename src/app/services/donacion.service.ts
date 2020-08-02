import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DonacionService {

  apiURL ="http://localhost:4004/api/donaciones"

  constructor( private _http: HttpClient ){}

    crearDonacion(donacionNueva){
      let params = JSON.stringify(donacionNueva);
      let options = {
        headers : new HttpHeaders({ 'Content-Type' : 'application/json' }),
      };
      return this._http.post(this.apiURL, params, options).pipe(map((res) => res));
    }


    mostrarDonacion(){
      return this._http.get(this.apiURL).pipe(map((res)=>res));
    }

    encontrarDonacionbyId(idDonacion){
      return this._http.get(this.apiURL + '/byId/' + idDonacion).pipe(map((res)=>res));
    }

    actualizarDonacion(idDonacion, donacionActualizada){
      let params = JSON.stringify(donacionActualizada);
      let options = {
        headers : new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };

      return this._http.put(this.apiURL + '/' + idDonacion, params, options).pipe(map((res)=>res));
    }

    eliminarDonacion(idDonacion){
      let options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };
      return this._http.delete(this.apiURL + '/' + idDonacion, options).pipe(map((res)=>res));
    }

    mostrarDonacionByProject(proyectoId){
      return this._http.get(this.apiURL + '/reportes-donaciones/' + proyectoId).pipe(((res)=>res));
    }

}


