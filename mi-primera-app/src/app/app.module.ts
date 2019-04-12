import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/* importamos este módulo de Ángular para poder hacer uso de Two way binding */

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent, PersonasComponent, PersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
