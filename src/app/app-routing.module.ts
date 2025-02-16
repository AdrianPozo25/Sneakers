<<<<<<< HEAD
// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
=======
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CartComponent } from './pages/cart/cart.component';
import { DetallesProductoComponent } from './pages/detalles-producto/detalles-producto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'cart', component: CartComponent },
  { path: 'producto/:id', component: DetallesProductoComponent }, // Ruta dinámica para cada producto
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
>>>>>>> 872004a (actualizacion con compodoc)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class AppRoutingModule {}
=======
export class AppRoutingModule { }
>>>>>>> 872004a (actualizacion con compodoc)
