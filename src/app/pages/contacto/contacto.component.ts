import { Component } from '@angular/core';

// Permite a los usuarios enviar un mensaje con su nombre, correo y mensaje.
@Component({
  selector: 'app-contacto', // Selector del componente en la plantilla HTML.
  standalone: false,
  templateUrl: './contacto.component.html', // Archivo de la plantilla HTML asociada.
  styleUrls: ['./contacto.component.css'] // Archivo de estilos CSS para este componente.
})
export class ContactoComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  sendMessage() {
    console.log('Mensaje enviado:', this.name, this.email, this.message); // Registra los datos en la consola.
    alert('Tu mensaje ha sido enviado con éxito.'); // Muestra un mensaje de confirmación al usuario.
  }
}
