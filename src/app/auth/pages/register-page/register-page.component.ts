import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'register-page',
  standalone: false,
  
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  private fb = inject(FormBuilder);

  public myForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
  }) 


  register() {
    
    if (this.myForm.get('password')?.value !== this.myForm.get('password2')?.value) {
      console.log('Passwords must be equal');
      return
    }
      
    console.log( this.myForm.value );

  }

}
