import { Component, computed, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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
  private router = inject( Router )

  public isChekingAuth = computed<boolean>( () => {
    if ( this.authService.authStatus() === AuthStatus.cheking ) return true;
    return false;
  })

  public authStatusChangeEffect = effect( () => {
    switch( this.authService.authStatus() ) {
      case AuthStatus.cheking:
        return
      case AuthStatus.authenticated:
        this.router.navigateByUrl('/dashboard')
        return
      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/auth/login')
        return
    }
  })

}
