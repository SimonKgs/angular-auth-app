import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { User, AuthStatus, LoginResponse, RegisterResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.BASE_URL;
  private http = inject( HttpClient );

  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>( AuthStatus.cheking );

  // this two are to expose instead of the signals
  public currentUser = computed( () => this._currentUser);
  public authStatus = computed( () => this._authStatus);


  constructor() { }


  login( email: string, password: string ): Observable<boolean> {

    const url = `${ this.baseUrl }/auth/login`
    const body = { email, password }

    return this.http.post<LoginResponse>( url, body )
      .pipe(
        tap( ({ user, token }) => {
          this._currentUser.set( user );
          this._authStatus.set( AuthStatus.authenticated );
          localStorage.setItem('token', token);
          console.log({ user, token });
        }),
        map( () => true),
        catchError( err => throwError( () => err.error.message))

      )
  }

  register( email: string, name: string, password: string ): Observable<boolean> {

    const url = `${ this.baseUrl }/auth/register`
    const body = { email, password, name }

    return this.http.post<RegisterResponse>( url, body )
      .pipe(
        tap( ({ user, token }) => {
          this._currentUser.set( user );
          this._authStatus.set( AuthStatus.authenticated );
          localStorage.setItem('token', token);
          console.log({ user, token });
        }),
        map( () => true),
        catchError( err => throwError( () => err.error.message))
      )
  } 
}
