import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-page',
  standalone: false,
  
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {


  private fb = inject( FormBuilder )


  public myForm: FormGroup = this.fb.group({
    // initial value, validations, ?
    email: ['', [ Validators.required, Validators.email]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
  });


  login() {
    console.log( this.myForm.value );
    
  }

}
