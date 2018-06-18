import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  public login(username: string, password: string): Observable<any> {
    const reqUrl = `${Constants.BASED_REQUEST_URL}/login`
    return this.http.post<any>(reqUrl, { username: username, password: password }, Constants.HTTP_OPTIONS);
  }
}
