// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from '/app/pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/CatalogoComponent';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DetallesProductoComponent } from './pages/detalles-producto/detalles-producto.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'detalles-producto/:id', component: DetallesProductoComponent },
  { path: 'cart', component: CartComponent },
  // Ruta comodín para redirigir si no coincide con nada:
  { path: '**', redirectTo: '' }
];
