import {CanActivate} from '@angular/router';
import {isUndefined} from 'util';

export class  LoginGuard implements CanActivate {
  canActivate() {
    const loggedIn: boolean = Math.random() < 0.5;
    if (!loggedIn) {
      console.log('place log in first');
    }
    return loggedIn;
  }}
