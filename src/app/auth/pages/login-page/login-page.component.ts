import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'login-page',
  standalone: false,
  
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {


  private fb = inject( FormBuilder )
  private authService = inject( AuthService )

  public myForm: FormGroup = this.fb.group({
    // initial value, validations, ?
    email: ['juna@gmail.com', [ Validators.required, Validators.email]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
  });

  login() {
    const { email, password }  = this.myForm.value; 

    this.authService.login( email, password )
      .subscribe({
        next: () => console.log("Everything ok"),
        error: ( message ) => {
          Swal.fire('Error', message, 'error')
        }
      })
  }
}
