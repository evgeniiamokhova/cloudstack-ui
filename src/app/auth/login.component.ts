import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared';
import { INotificationService } from '../shared/services/notification.service';

import 'rxjs/Rx';
import { Observable } from 'rxjs';


@Component({
  selector: 'cs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {

  private username: string;
  private password: string;
  private usernameRequired: boolean;
  private passwordRequired: boolean;

  constructor(
    private auth: AuthService,
    @Inject('INotificationService') private notification: INotificationService,
    private router: Router
  ) {
    this.username = '';
    this.password = '';
    this.usernameRequired = false;
    this.passwordRequired = false;
  }

  public onSubmit(): void {
    this.login(this.username, this.password);
  }

  private login(username: string, password: string): void {
    this.auth.login(username, password)
      .subscribe(() => {
        this.handleLogin();
    }, error => {
      this.handleError(error);
      return Observable.throw(error);
    });
  }

  private handleLogin(): void {
    this.router.navigate(['']);
  }

  private handleError(error: string): void {
    this.usernameRequired = !this.username;
    this.passwordRequired = !this.password;
    if (!this.usernameRequired && !this.passwordRequired) {
      this.notification.message(error);
    }
  }
}
