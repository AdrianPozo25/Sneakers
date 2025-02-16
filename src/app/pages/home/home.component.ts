import { Component, OnInit } from '@angular/core';

// Declaración global para TypeScript (permite asignar funciones a window)
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

@Component({
  selector: 'app-home',
  standalone: false, 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.loadYouTubeAPI();
  }

  
    //Carga el script de la API de YouTube dinámicamente y define la función que será llamada cuando la API esté lista.
  
  private loadYouTubeAPI(): void {
    if (!window.YT) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(script);
      window.onYouTubeIframeAPIReady = () => {
        this.initPlayers();
      };
    } else {
      this.initPlayers();
    }
  }

  
    //Inicializa los dos reproductores en los contenedores "player1" y "player2".
   
  private initPlayers(): void {
    // Primer video
    new window.YT.Player('player1', {
      height: '360',
      width: '640',
      videoId: 'L7cfqClWYNI', // Reemplaza con el ID de tu primer video
      events: {
        'onReady': this.onPlayerReady,
        'onStateChange': this.onPlayerStateChange
      }
    });

    // Segundo video
    new window.YT.Player('player2', {
      height: '360',
      width: '640',
      videoId: 'QqLy3SFwo6M', // Reemplaza con el ID de tu segundo video
      events: {
        'onReady': this.onPlayerReady,
        'onStateChange': this.onPlayerStateChange
      }
    });
  }

  private onPlayerReady(event: any): void {
    console.log('El reproductor de YouTube está listo.');
    // event.target.playVideo(); // Descomenta si quieres auto-reproducir
  }

  private onPlayerStateChange(event: any): void {
    console.log('Estado del reproductor cambió:', event.data);
  }
}
