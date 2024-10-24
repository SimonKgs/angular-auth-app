import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'register-page',
  standalone: false,
  
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  private fb = inject(FormBuilder);
  private authService = inject( AuthService)
  private router = inject(Router)

  public myForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
  }) 


  register() {
    
    if (this.myForm.get('password')?.value !== this.myForm.get('password2')?.value) {
      Swal.fire('Error', 'Passwords must be equal', 'error')
      return
    }
  
    const { email, name, password }  = this.myForm.value; 

    this.authService.register( email!, name!, password! )
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: ( message ) => {
          Swal.fire('Error', message, 'error')
        }
      })

  }

}
