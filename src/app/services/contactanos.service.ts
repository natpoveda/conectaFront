import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactanosService {

  apiURL = "http://localhost:4004/api/contactanos"

  constructor( private _http: HttpClient) {}

  crearContactanos(ContactanosNuevo){
    let params = JSON.stringify(ContactanosNuevo);
    let options = {
      headers : new HttpHeaders({ 'Content-Type' : 'application/json' }),
    };

    return this._http.post(this.apiURL,params,options).pipe(map((res)=>res));
  }

  mostrarContactanoss(){
    console.log("Mostrar Contactanoss");
    return this._http.get(this.apiURL).pipe((res)=>res);
  }

  encontrarContactanosbyId(ContactanosId){
    return this._http.get(this.apiURL + '/' + ContactanosId).pipe(map((res)=>res));
  }

 
  eliminarContactanos(ContactanosId){
    let options = {
      headers : new HttpHeaders({ 'Content-Type' : 'application/json' }),
    };

    return this._http.delete(this.apiURL + '/' + ContactanosId , options).pipe(map((res)=>res));
  }

}
