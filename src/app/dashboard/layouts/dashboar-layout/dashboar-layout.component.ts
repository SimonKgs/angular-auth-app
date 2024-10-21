import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth-service.service';

@Component({
  selector: 'dashboar-layout',
  standalone: false,
  templateUrl: './dashboar-layout.component.html',
  styleUrl: './dashboar-layout.component.css'
})
export class DashboarLayoutComponent {

  private authService = inject( AuthService )
  // I can get the same functionality with a computed property of the signal
  public user = computed(() => this.authService.currentUser());
  // get user() {
  //   return this.authService.currentUser();
  // }

}
