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
    if (window.screen.width < 992) {
      this.mobile = true
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (window.innerWidth < 992) {
      this.mobile = true
    }
    else {
      this.mobile = false
    }
  }
}

