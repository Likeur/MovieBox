import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './docs.component.html',
  styles: [
  ]
})
export default class DocsComponent {

}
