import { Component } from '@angular/core';

/* Este es un decorador en Angular, En angular los decoradores se escriben comenzando con "@" */
@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    /* Aquí puedo agregar una plantilla html cambiando la propiedad del decorador y podemos escribir directamente código html donde dice template  */
    /*template: '<h1>Listado de Personas</h1><app-persona></app-persona><app-persona></app-persona>' */
    /*Ahora bien, con esta sintaxis tengo que tener todo el código html en una sola línea*/
    /* Ahora bien, si queremos tener más de una línea de código debemos cambiar de comillas simples a comillas invertidas */

    /* template: `<h1>Listado de Personas</h1>
    <app-persona></app-persona>
    <app-persona></app-persona>` */
    /* styleUrls: ['./personas.component.css'] */
    /* de la forma anterior podemos adjuntar archivos .css a nuestro proyecto */
    /* Aunque también se puede hacer la modificación del css directemente desde este archivo sin necesidad de llamado a archivos css */
    styles: [`
    h1{
        color:blue;
    }
    `]/* si vamos a agregar una sola línea de estilos aplicamos comillas simples '' si es más de una línea lo hacemos con comillas simples invertidas `` y con ello ya podemos darle al botón enter dentro del arreglo */
})
export class PersonasComponent {
    agregarPersona = false;

    /* Esta parte responde a Event Binding */
    agregarPersonaStatus = "No se ha agregado ninguna persona";
    /* Ahora lo que se desea es responder a un evento, que en este caso se llamara  */
    /* Hasta aquí la parte de Event Binding */

    /* Ahora bien, lo que se quiere es que dinámicamente el botón cambie de apariencia de deshabilitado a habilitado */
    
    tituloPersona = "Ingeniero"; /* POr aquí es por dónde nos traemos la información que desamos capturar esto me sirve para el desarrollo de la aplicación de la empresa */

    /* Es por ello que vamos a simular una acción dentro de nuestra clase personas component lo que vamos a crear es un constructor */
    constructor() {
        setTimeout(
            /* Aquí vamos a proceder a llamar a una función flecha */
            () => {/* y dentro de esta función flecha vamos a proceder a modificar nuestra propiedad agregarPersona y en lugar de que sea el valir false vamos a cambiarlo a true*/
                this.agregarPersona = true;
            }
            , 3000);/*Esta es una función de javascript*/
            /* Podemos observar que después de los 3 segundos se habilita nuestro botón y pasa a true */
            /* Así que con lo que acabamos de ver aquí ya estamos trabajando con nuestro concepto de Property Binding */
    }

    onCrearPersona(){
        this.agregarPersonaStatus = "Persona agregada";
    }

    /* El siguente método es el que transcribe todo los que copiamos en un input */

    onModificarPersona(event: Event){
        this.tituloPersona = (<HTMLInputElement>event.target).value;
    }
}