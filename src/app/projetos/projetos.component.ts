import { Component, OnInit, Renderer2, ElementRef, ViewChild, HostListener } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {

  itemsPerSlide = 3

  projetos = [
    { image: 'assets/Logo-Mind.png', name: 'Mind' },
    { image: 'assets/Logo-EuDiversidade.png', name: 'Mind 2' },
    { image: 'assets/Logo-Mind.png', name: 'Mind 3' },
    { image: 'assets/Logo-Mind.png', name: 'Mind 4' },
    { image: 'assets/Logo-Mind.png', name: 'Mind 5' },
    { image: 'assets/Logo-Mind.png', name: 'Mind 6' },
  ];

  ngOnInit(event: any) {
    if (window.innerWidth < 650)
      this.itemsPerSlide = 1
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) : void {
    this.itemsPerSlide = window.innerWidth >= 650 ? 3 : 1
  }
}
