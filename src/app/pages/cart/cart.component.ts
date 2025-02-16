import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  carrito: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.carrito = this.cartService.obtenerCarrito();
  }

  cambiarCantidad(id: number, cantidad: number) {
    this.cartService.cambiarCantidad(id, cantidad);
  }

  eliminarProducto(id: number) {
    this.cartService.eliminarProducto(id);
  }

  obtenerTotal() {
    return this.cartService.obtenerTotal();
  }
}
