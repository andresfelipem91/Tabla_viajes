import { Component } from '@angular/core';
import  viajero from "src/assets/json/viajeros.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name!: string;
  selection!: string;
  viajeros= ''
Viajeros: any=viajero;

}
