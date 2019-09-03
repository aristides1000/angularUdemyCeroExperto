import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  title = 'Aplicación de Calculadora';

  efectuarSuma = true;

  constructor() {
    const efectuarSuma = false;
    if (efectuarSuma === false) {
      this.efectuarSuma = true;
    } else {
      this.efectuarSuma = false;
    }
  }

  ngOnInit() {
  }

}
