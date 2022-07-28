import{ Component } from '@angular/core';

@Component({
  selector: 'Viajeros',
  template: `
  <h1>Pagina de Viajeros</h1>
  <p>Este es la tablas</p>
  `
})
export class Viajeros{
  constructor(){
    console.log("Componente viajeros cargo con exito");
  }
}
