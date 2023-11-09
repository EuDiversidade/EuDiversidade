import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ScrollServiceService } from '../scroll-service.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent {
  mobile = false

  ngOnInit() {
    this.mobile = window.screen.width < 992 ? true : false
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.mobile = window.innerWidth < 992 ? true : false
  }
}

