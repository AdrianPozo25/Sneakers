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

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
