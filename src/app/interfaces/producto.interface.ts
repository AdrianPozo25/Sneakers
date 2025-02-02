// src/app/interfaces/producto.interface.ts
export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    descripcion?: string;
    talla?: number[];
    color?: string[];
    imagen?: string;
  }
  