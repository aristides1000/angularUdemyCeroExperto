import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  /*de momento vamos a inicializarlo con código duro vamos a meterle el nombre a las variables directamente por frontend*/
  nombrePersona: string = "Juan";
  apellidoPersona: string = "Perez";
  edad: number = 28;

  /* Un punto importante con relación a la interpolación es que podemos acceder a métodos */

  /* Por ejemplo si la edad fuese de tipo privada o private, entonces tendríamos que acceder a ella a través de un método */

  /* Podríamos acceder a ella a través por ejemplo del método getEdad() */

  /* Sin embargo vamos a dejarlo de forma pública para poder acceder directamente a este elemento*/
  /* private edad: number = 28; */

  getEdad():number{
    return this.edad;
  }
}
