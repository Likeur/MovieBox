import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,NavbarComponent,RouterLink],
  templateUrl: './register.component.html',
  styles: [
  ]
})
export default class RegisterComponent {

  loader = false

  onSubmit(){
    this.loader = true
  }
}
