import { Component, OnInit, Renderer2, ElementRef, ViewChild, HostListener, AfterViewInit, Input, ChangeDetectorRef } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { CarouselComponent, CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  @ViewChild('carrosselProjetos') carrossel!: CarouselComponent

  private _itemsPerSlide!: number;
  mobile = true
  quan = 0

  @Input()
  set itemsPerSlide(value: number) {
    this._itemsPerSlide = value
  }

  get itemsPerSlide(): number {
    return this._itemsPerSlide
  }

  projetos = [
    { id: 0, image: 'assets/Logo-Mind.png', name: 'Mind' },
    { id: 1, image: 'assets/Logo-EuDiversidade.png', name: 'Mind 2' },
    { id: 2, image: 'assets/Logo-Mind.png', name: 'Mind 3' },
    { id: 3, image: 'assets/Logo-Mind.png', name: 'Mind 4' },
    { id: 4, image: 'assets/Logo-Mind.png', name: 'Mind 5' },
    { id: 5, image: 'assets/Logo-Mind.png', name: 'Mind 6' },
  ];

  ngOnInit() {
    this.mobile = window.innerWidth < 650 ? true : false
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) : void {
    this.mobile = window.innerWidth < 650 ? true : false
  }
}
