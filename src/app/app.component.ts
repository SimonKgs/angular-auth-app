import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth/services/auth-service.service';
import { AuthStatus } from './auth/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'authApp';

  private authService = inject( AuthService );

  public isChekingAuth = computed<boolean>( () => {
    if ( this.authService.authStatus() === AuthStatus.cheking ) return true;
    return false;
  })

}
