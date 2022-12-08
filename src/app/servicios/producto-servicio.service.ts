import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductoServicioService {
  _url = 'http://localhost:8080/producto'
  constructor(
    private http: HttpClient
  ){
    console.log('Servicios corriendo');
    
  }

  listaProductos(){
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

    return this.http.get(this._url, {
      headers: header
    })
  }

  creaProductos(data:any){
    console.log("entramos a la funcion");
    
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

    return this.http.post(this._url, data, {headers: header})
    
  }

  buscaProductoPorId(id:number){
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

    return this.http.get(this._url+'/'+id, {
      headers: header
    })

  }

}
