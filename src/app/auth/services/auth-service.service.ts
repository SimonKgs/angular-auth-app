import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { User, AuthStatus, LoginResponse, RegisterResponse, CheckTokenResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.BASE_URL;
  private http = inject( HttpClient );

  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>( AuthStatus.cheking );

  // this two are to expose instead of the signals
  // remember a signal is like a function to get the value needs to be invoked()
  public currentUser = computed( () => this._currentUser());
  public authStatus = computed( () => this._authStatus());


  constructor() {
    this.checkAuthStatus().subscribe();
  }

  private setAuthentication(user: User, token: string): boolean {
    this._currentUser.set( user );
    this._authStatus.set( AuthStatus.authenticated );
    localStorage.setItem('token', token);
    return true
  }


  login( email: string, password: string ): Observable<boolean> {

    const url = `${ this.baseUrl }/auth/login`
    const body = { email, password }

    return this.http.post<LoginResponse>( url, body )
      .pipe(
        map( ({ user, token }) => this.setAuthentication(user, token) ),
        catchError( err => throwError( () => err.error.message))

      )
  }

  register( email: string, name: string, password: string ): Observable<boolean> {

    const url = `${ this.baseUrl }/auth/register`
    const body = { email, password, name }

    return this.http.post<RegisterResponse>( url, body )
      .pipe(
        map( ({ user, token }) => this.setAuthentication(user, token) ),
        catchError( err => throwError( () => err.error.message))
      )
  }
  
  
  checkAuthStatus():Observable<boolean> {
    const url = `${this.baseUrl}/auth/check-token`
    const token = localStorage.getItem('token');

    if (!token) return of(false);

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${ token }`);


    return this.http.get<CheckTokenResponse>(url, { headers })
      .pipe(
        map( ({ user, token }) => this.setAuthentication(user, token) ),
        catchError( () => {
          this._authStatus.set( AuthStatus.notAuthenticated )
          return of(false)
        })
    )
  }
}