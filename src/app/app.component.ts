import { Component } from '@angular/core';
import { ProductoServicioService } from './servicios/producto-servicio.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontAUDISOFT';
  public productos : Array<any> = []
  public objProductoSchema = {
    id: 0,
    nombre: "",
    descripcion: "",
    precio: 0,
    cantidad: 0
  }
  public productoSeleccionado: boolean = false

  constructor(

    private productoServicios:ProductoServicioService

  ){

    this.productoServicios.listaProductos().subscribe( (response:any) => {
      this.productos = response
    });

  }

  public sendData(nombre: string, descripcion: string, precio:string, cantidad:string){

    let objData = {
      nombre: nombre,
      descripcion: descripcion,
      precio: parseInt(precio),
      cantidad: parseInt(cantidad)
    }

    this.productoServicios.creaProductos(objData).subscribe(resp => {
      console.log("nuevo producto creado:::", resp);
    })

  }

  public selectDataEdit(id:number){
    this.productoServicios.buscaProductoPorId(id).subscribe( (resp:any) => {
      this.objProductoSchema.id = resp.id;
      this.objProductoSchema.nombre = resp.nombre;
      this.objProductoSchema.descripcion = resp.descripcion;
      this.objProductoSchema.precio = resp.precio;
      this.objProductoSchema.cantidad = resp.cantidad;
    })
    this.productoSeleccionado = true

    
  }

  public editData(nombre: string, descripcion: string, precio:string, cantidad:string){
    let objData = {
      id: this.objProductoSchema.id,
      nombre: nombre,
      descripcion: descripcion,
      precio: parseInt(precio),
      cantidad: parseInt(cantidad)
    }

    this.productoServicios.creaProductos(objData).subscribe(resp => {
      console.log("producto actualizado:::", resp);
    })

  }
  

}
