import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {
  @ViewChild('carrosselProjetos') carrossel!: ElementRef;

  carousel: any; // Adjust the type based on the Bootstrap version you are using
  carouselWidth: number = 0;
  carouselItemWidth: number = 0;
  scrollPosition: number = 0;
  teste = false

  projetos = [
    { image: 'assets/Logo-Mind.png', name: 'Mind' },
    { image: 'assets/Logo-EuDiversidade.png', name: 'Mind 2' },
    { image: 'assets/Logo-Mind.png', name: 'Mind 3' },
    { image: 'assets/Logo-Mind.png', name: 'Mind 4' },
    { image: 'assets/Logo-Mind.png', name: 'Mind 5' },
    { image: 'assets/Logo-Mind.png', name: 'Mind 6' },
  ];
  itemsPerSlide = 3;

  constructor(private renderer: Renderer2) {}

  ngOnInit(event: any) {
    const element = this.carrossel.nativeElement
    const idx = event.relatedTarget.index
    const totalItems = element.querySelectorAll('.carousel-item').length
    
    if (idx >= totalItems - (this.itemsPerSlide - 1)) {
      const it = this.itemsPerSlide - (totalItems - idx)
      for (let i = 0; i < it; i++) {
        if (event.direction === 'left') {
          this.renderer.appendChild(element.querySelector('.carousel-inner'), element.querySelector('.carousel-item'));
        } else {
          this.renderer.appendChild(element.querySelector('.carousel-inner'), element.querySelector('.carousel-item:first-child'));
        }
      }
    }
  }

  /*private animateScroll(): void {
    if (this.carrossel) {
      const innerElement = this.carrossel.nativeElement.querySelector('.carousel-inner');
      this.renderer.setStyle(innerElement, 'scroll-behavior', 'smooth');
      innerElement.scrollLeft = this.scrollPosition;

      // Reset scroll-behavior to auto after animation
      setTimeout(() => {
        this.renderer.removeStyle(innerElement, 'scroll-behavior');
      }, 600);
    }
  }*/
}
