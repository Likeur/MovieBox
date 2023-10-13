import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent, ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styles: [
  ]
})
export default class LoginComponent {
  
  loader = false;
  showError = false;
  errorMessage = 'email ou mot de passe incorrect';
  private router = inject(Router);

  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  })

  onSubmit(){
    const email = this.loginForm.value.email!;
    const password = this.loginForm.value.password!;
    
    if(email === 'likeur@gmail.com' && password === 'likeur'){
      this.loader = true
      this.loginForm.reset();
      setTimeout(() => {
        this.loader = false
        this.router.navigateByUrl('/chat');
      }, 2000);
    }else{
      this.loader = true
      setTimeout(() => {
        this.loader = false
        this.showError = true
      }, 2000);
        
    }    
  }
}
