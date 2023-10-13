import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import LoginComponent from '../auth/login/login.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [CommonModule,RouterModule, NavbarComponent],
  templateUrl: './acceuil.component.html',
  styles: [
  ]
})
export default class AcceuilComponent {

}
