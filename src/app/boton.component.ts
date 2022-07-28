import { Component, Renderer2, AfterViewChecked , ElementRef } from '@angular/core';


@Component({
  selector: 'app-boton',
  template: `

    <button>Add filter</button>


  `,
  styleUrls: ['./app.component.scss']
})
export class BotonComponent implements AfterViewChecked  {

  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  ngAfterViewChecked() {
    const newContent = 'new content';
    const element = this.elem.nativeElement.querySelector('.parent a span');
    this.renderer.setProperty(element, 'innerHTML', newContent);
  }

}
