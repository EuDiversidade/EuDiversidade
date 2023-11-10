import { Component } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {
  slides = [
    { image: 'path/to/image1.jpg' },
    { image: 'path/to/image2.jpg' },
    { image: 'path/to/image3.jpg' },
    { image: 'path/to/image4.jpg' },
    // Add more slides as needed
  ];
}
