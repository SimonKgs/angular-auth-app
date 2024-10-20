import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User, AuthStatus } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private readonly baseUrl: string = environment.BASE_URL;
  private http = inject( HttpClient );

  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>( AuthStatus.cheking );

  constructor() { }


  login( email: string, password: string ): Observable<boolean> {


    return of(true);
  }

  register( email: string, name: string, password: string ): Observable<boolean> {


    return of(true);
  } 
}
