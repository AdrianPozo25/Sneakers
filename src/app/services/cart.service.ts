import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carrito: any[] = [];

  constructor() {}

  // Método para obtener los productos en la cesta
  obtenerCarrito() {
    return this.carrito;
  }

  // Método para añadir productos a la cesta
  agregarAlCarrito(producto: any) {
    const productoExistente = this.carrito.find(item => item.id === producto.id);
    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
  }

  // Método para actualizar la cantidad de un producto en la cesta
  cambiarCantidad(id: number, cantidad: number) {
    const producto = this.carrito.find(item => item.id === id);
    if (producto) {
      producto.cantidad += cantidad;
      if (producto.cantidad <= 0) {
        this.eliminarProducto(id);
      }
    }
  }

  // Método para eliminar un producto de la cesta
  eliminarProducto(id: number) {
    this.carrito = this.carrito.filter(item => item.id !== id);
  }

  // Método para calcular el total del carrito
  obtenerTotal() {
    return this.carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  }
}
