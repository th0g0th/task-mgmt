import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /** User name */
  public username: string;
  
  /** Password */
  public password: string;
  
  /**
   *Creates an instance of LoginComponent.
   * @memberof LoginComponent
   */
  constructor(private loginService: LoginService) {
  }

  
  ngOnInit() {
  }

  login() {
    this.loginService.login('admin', 'admin').subscribe((result) => {
      document.cookie
      return false;
    })
  }

}
