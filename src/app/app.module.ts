import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ViajerosPipe } from './viajeros.pipe';
import { BotonComponent }  from './boton.component';

@NgModule({
  declarations: [
    AppComponent,
    ViajerosPipe,
   BotonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    BotonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
