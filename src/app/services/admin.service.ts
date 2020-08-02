//Permite que el servicio pueda ser usado en otra parte de angular
import { Injectable } from '@angular/core';
// Permite comunicarse por medio del metodo http con otra aplicacion
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable()
export class AdminService {
    apiURL = 'http://localhost:4004/api/admin/';
    apiURLogin  = 'http://localhost:4004/api/admin/login';
    adminLogged :  Boolean;
  
    constructor(
        private _http: HttpClient
    ){}

    loginAdmin(adminParams){
       this.adminLogged = false;
        const params =  JSON.stringify(adminParams);
        const opt = { headers: new HttpHeaders({ 'Content-type': 'application/json'})}
        return this._http.post(
            this.apiURLogin, 
            params,
            opt
        ).pipe( res => res);
    }

    crearAdmin(adminNuevo) {
        let params = JSON.stringify(adminNuevo);
        let options = {
            headers : new HttpHeaders({ 'Content-Type' : 'application/json' }),
        };

        return this._http.post(this.apiURL, params, options).pipe(map((res) => res));
    }
    
    mostrarAdmin(){
        return this._http.get(this.apiURL).pipe((res)=>res);
    }

    //servicio actualizar usuario
    actualizarAdmin(idAdmin, adminActualizado) {
      let params = JSON.stringify(adminActualizado);
      let options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };
      return this._http
        .put(this.apiURL + idAdmin, params, options)
        .pipe(map((res) => res));
    }
    
    //servicio eliminar usuario
    eliminarAdmin(idAdmin) {
      let options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };
      return this._http
        .delete(this.apiURL + idAdmin, options)
        .pipe(map((res) => res));
    }
   
}
