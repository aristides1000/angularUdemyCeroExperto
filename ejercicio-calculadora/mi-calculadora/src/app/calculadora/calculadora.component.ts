import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class CalculadoraComponent implements OnInit {

  title = 'Aplicación de Calculadora';

  mensajeSuma = null;

  operandoA = null;
  operandoB = null;


  efectuarSuma = true;

  constructor() {
    /* const efectuarSuma = false; */
    if ((this.operandoA === null) && (this.operandoB === null)) {
      this.efectuarSuma = true;
    } else {
      this.efectuarSuma = false;
    }
  }

  onSumar() {
    this.mensajeSuma = parseFloat(this.operandoA) + parseFloat(this.operandoB);
  }

  /* onRealizarSuma(event: Event) {
    this.resultadoSuma = (<HTMLInputElement>event.target).value;
  } */

  onCapturaOperandoA(){
    this.operandoA = (<HTMLInputElement>event.target).value;
  }

  onCapturaOperandoB(){
    this.operandoB = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
