import { Component } from '@angular/core';

@Component({ /* El @ indica que estamos en presencia de un decorador */
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Hola Mundo desde Angular';
}
