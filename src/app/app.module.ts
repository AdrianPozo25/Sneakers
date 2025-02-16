<<<<<<< HEAD
// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Páginas
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/CatalogoComponent';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DetallesProductoComponent } from './pages/detalles-producto/detalles-producto.component';

// Componentes
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
=======
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CartComponent } from './pages/cart/cart.component';
import { FormsModule } from '@angular/forms'; 
>>>>>>> 872004a (actualizacion con compodoc)

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent,
    CatalogoComponent,
    ContactoComponent,
    DetallesProductoComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // <-- Importante
=======
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CatalogoComponent,
    ContactoComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
>>>>>>> 872004a (actualizacion con compodoc)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
<<<<<<< HEAD
export class AppModule {}
=======
export class AppModule { }
>>>>>>> 872004a (actualizacion con compodoc)
