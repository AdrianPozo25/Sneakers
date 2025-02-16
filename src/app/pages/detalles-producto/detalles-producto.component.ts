import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-detalles-producto',
  standalone: false,
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})


export class DetallesProductoComponent implements OnInit {

agregarAlCarrito() {
  if (!this.producto) return; // Verifica que haya un producto antes de agregarlo
  this.cartService.agregarAlCarrito(this.producto);
  alert(`${this.producto.nombre} añadido a la cesta ✅`);
}
  producto: any;
  imagenActualIndex: number = 0;
  transicionActiva: boolean = false;
  autoSlide: any;

  productos = [
      {
        id: 1, 
        nombre: 'Jordan 1 Retro High OG', 
        precio: 539.99, 
        talla: '42', 
        color: 'Marrón/Negro',
        imagenes: ['image/travisfondoblanco.jpg', 'image/travisfondoblanco2.jpg'],
        descripcion: 'La Jordan 1 Retro High OG es un clásico atemporal con materiales premium y un diseño icónico.'
      },
      {
        id: 2, 
        nombre: 'Asics Kayano 14', 
        precio: 159.99, 
        talla: '44', 
        color: 'Blanco/Azul',
        imagenes: ['image/kayano14.jpg', 'image/kayano142.jpg'],
        descripcion: 'Las Asics Kayano 14 combinan comodidad y rendimiento, diseñadas para corredores exigentes.'
      },
      {
        id: 3, 
        nombre: 'Maison Mihara Yasuhiro', 
        precio: 249.99, 
        talla: '43', 
        color: 'Negro/Blanco',
        imagenes: ['image/maison.png', 'image/maison2.png'],
        descripcion: 'Las Maison Mihara Yasuhiro ofrecen un diseño vanguardista con suela exagerada y detalles únicos.'
      },
      {
        id: 4, 
        nombre: 'Yeezy Foam Runner', 
        precio: 59.99, 
        talla: '42', 
        color: 'Arena',
        imagenes: ['image/yeezyfoamrunner.jpg', 'image/yeezyfoamrunner2.jpg'],
        descripcion: 'El Yeezy Foam Runner redefine la comodidad con un diseño futurista y materiales sostenibles.'
      },
      { id: 5, 
        nombre: 'Nike Dunk Low Panda', 
        precio: 149.99, 
        talla: '42', 
        color: 'Blanco/Negro',
        descripcion: 'El modelo Nike Dunk Low Panda se ha convertido en un imprescindible por su versatilidad y estilo.',
        imagenes: ['image/panda1.png', 'image/panda2.png'] 
      },
  
      { id: 6, 
        nombre: 'New Balance 1906R', 
        precio: 129.99, 
        talla: '42', 
        color: 'Gris/Blanco',
        descripcion: 'Las New Balance 1906R combinan estética retro con la última tecnología en amortiguación.',
        imagenes: ['image/nb1906.jpg', 'image/nb19062.jpg'] },
  
      { id: 7, 
        nombre: 'Air Max 95 x Corteiz', 
        precio: 179.99, 
        talla: '42', 
        color: 'Negro/Azul',
        descripcion: 'Colaboración exclusiva entre Nike y Corteiz, estas Air Max 95 destacan por sus materiales premium.',
        imagenes: ['image/corteizblue.jpg', 'image/corteizblue2.jpg'] },
  
      { id: 8, nombre: 'Dior B30', 
        precio: 899.99, 
        talla: '42', 
        color: 'Negro/Plata',
        descripcion: 'Las Dior B30 son el epítome del lujo y la sofisticación en el calzado deportivo.',
        imagenes: ['image/b30black.jpg', 'image/b30black2.jpg'] },
  
      { id: 9, 
        nombre: 'Adidas Samba OG', 
        precio: 109.99, 
        talla: '42', 
        color: 'Blanco/Negro',
        descripcion: 'Un clásico atemporal, las Adidas Samba OG son ideales para cualquier ocasión casual.',
        imagenes: ['image/samba.webp', 'image/samba2.webp'] },
  
      { id: 10, 
        nombre: 'Salomon XT-6', 
        precio: 169.99, 
        talla: '42', 
        color: 'Gris/Negro',
        descripcion: 'Diseñadas para el trail running, las Salomon XT-6 ofrecen agarre y estabilidad excepcionales.',
        imagenes: ['image/salomon.jpg', 'image/salomon2.jpg'] },
  
      { id: 11, 
        nombre: 'Puma MB.02 Lamelo Ball', 
        precio: 79.99, 
        talla: '42', 
        color: 'Rosa/Negro',
        descripcion: 'Las Puma MB.02 de Lamelo Ball combinan tecnología avanzada y diseño llamativo.',
        imagenes: ['image/melo.webp', 'image/melo2.webp'] },
  
      { id: 12, 
        nombre: 'Converse Chuck 70 CDG', 
        precio: 189.99, 
        talla: '42', 
        color: 'Azul/Negro',
        descripcion: 'El icónico diseño de Converse con el toque exclusivo de Comme des Garçons.',
        imagenes: ['image/cdg.webp', 'image/cdg2.webp'] },
  
        { 
          id: 13, 
          nombre: 'Balenciaga Track', 
          precio: 899.99, 
          talla: '42', 
          color: 'Negro', 
          descripcion: 'Las Balenciaga Track son una declaración de moda con su diseño vanguardista y suelas voluminosas.', 
          imagenes: ['image/balen.jpg', 'image/balen2.jpg'] 
        },
        
        { 
          id: 14, 
          nombre: 'Nike Air Force 1', 
          precio: 119.99, 
          talla: '42', 
          color: 'Blanco', 
          descripcion: 'Las icónicas Air Force 1 ofrecen un diseño limpio y versátil con una comodidad excepcional.', 
          imagenes: ['image/af1.jpg', 'image/af12.jpg'] 
        },
        
        { 
          id: 15, 
          nombre: 'Jordan 4 Retro', 
          precio: 299.99, 
          talla: '42', 
          color: 'Blanco/Verde', 
          descripcion: 'Las Jordan 4 Retro combinan un diseño clásico con detalles modernos para un look inconfundible.', 
          imagenes: ['image/j4.avif', 'image/j42.avif'] 
        },
        
        { 
          id: 16, 
          nombre: 'Vans Old Skool x Fear of God', 
          precio: 75.99, 
          talla: '42', 
          color: 'Blanco/Negro', 
          descripcion: 'Colaboración especial de Vans con Fear of God, con un diseño clásico y detalles exclusivos.', 
          imagenes: ['image/vans.webp', 'image/vans2.webp'] 
        },
        
        { 
          id: 17, 
          nombre: 'Nike Blazer Mid 77', 
          precio: 119.99, 
          talla: '42', 
          color: 'Blanco/Gris', 
          descripcion: 'Las Nike Blazer Mid 77 tienen un diseño retro con materiales de alta calidad y una suela resistente.', 
          imagenes: ['image/blaz.avif', 'image/blaz2.avif'] 
        },
        
        { 
          id: 18, 
          nombre: 'Off-White x Nike Dunk', 
          precio: 650.00, 
          talla: '42', 
          color: 'Gris/Naranja', 
          descripcion: 'Diseñadas por Virgil Abloh, las Off-White x Nike Dunk son una obra maestra del streetwear.', 
          imagenes: ['image/off.jpg', 'image/off2.jpg'] 
        },
        
        { 
          id: 19, 
          nombre: 'New Balance 990 V5', 
          precio: 199.99, 
          talla: '42', 
          color: 'Gris', 
          descripcion: 'Las New Balance 990 V5 combinan comodidad, durabilidad y estilo icónico.', 
          imagenes: ['image/nb990.avif', 'image/nb9902.avif'] 
        },
  
        { 
          id: 20, 
          nombre: 'Rick Owens Jumbo', 
          precio: 999.99, 
          talla: '42', 
          color: 'Negro/Blanco', 
          descripcion: 'El modelo Rick Owens Jumbo es una fusión de diseño futurista y materiales premium.', 
          imagenes: ['image/ro.jpg', 'image/ro2.jpg'] 
        }
  ];

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  
    //Método de inicialización del componente.
    //Se ejecuta cuando el componente es cargado en la vista.
   
  ngOnInit(): void {
    // Obtiene el ID del producto desde la URL.
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Busca el producto en la lista de productos usando el ID.
    this.producto = this.productos.find(prod => prod.id === id);
    if (!this.producto) return; // Si no encuentra el producto, detiene la ejecución.

    // Si el producto tiene más de una imagen, inicia el auto-slide.
    if (this.producto.imagenes.length > 1) {
      this.iniciarAutoSlide();
    }
  }

  
    //Cambia la imagen mostrada en el carrusel.
    //@param direccion 1 para siguiente imagen, -1 para imagen anterior.
   
  cambiarImagen(direccion: number) {
    this.transicionActiva = true; // Activa la animación de transición.
    
    setTimeout(() => {
      const totalImagenes = this.producto.imagenes.length;
      this.imagenActualIndex = (this.imagenActualIndex + direccion + totalImagenes) % totalImagenes;
      this.transicionActiva = false; // Desactiva la animación después del cambio.
    }, 300); 
    
    this.reiniciarAutoSlide();
  }

  
   //Selecciona una imagen específica en el carrusel.
   // @param index Índice de la imagen a mostrar.
  seleccionarImagen(index: number) {
    this.transicionActiva = true; // Activa la animación de transición.
    
    setTimeout(() => {
      this.imagenActualIndex = index;
      this.transicionActiva = false; // Desactiva la animación después del cambio.
    }, 300);

    this.reiniciarAutoSlide();
  }

  //Inicia el cambio automático de imágenes en el carrusel.
  iniciarAutoSlide() {
    this.autoSlide = setInterval(() => {
      this.cambiarImagen(1); // Cambia la imagen cada 4 segundos.
    }, 4000);
  }

  //Reinicia el auto-slide cuando el usuario interactúa con el carrusel.
  reiniciarAutoSlide() {
    clearInterval(this.autoSlide);
    setTimeout(() => this.iniciarAutoSlide(), 5000); // Reinicia después de 5 segundos de inactividad.
  }

  //Agrega el producto actual a la cesta de compras.
  añadirACesta() {
    if (this.producto) {
      this.cartService.agregarAlCarrito(this.producto); // Llama al servicio de carrito para añadir el producto.
      alert(`${this.producto.nombre} se añadió a la cesta.`); // Muestra una alerta de confirmación.
    }
  }
}
