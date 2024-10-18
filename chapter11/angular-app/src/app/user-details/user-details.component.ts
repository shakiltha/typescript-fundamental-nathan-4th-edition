import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BroadcastService, EventKeys } from '../services/broadcast.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  loggedInUserName: string = 'logged_in_user';
  isLoggedIn: boolean = false;
  constructor(private broadcastService: BroadcastService) {
    _.bindAll(this, 'loginSuccessful');
    this.broadcastService
      .on(EventKeys.USER_LOGIN_EVENT)
      .subscribe(this.loginSuccessful);
  }
  ngOnInit(): void {}
  @Output() notify = new EventEmitter();
  onLoginClicked() {
    console.log(`UserDetailsComponent : onLoginClicked()`);
    this.notify.emit('UserDetailsComponent : emit value');
    this.broadcastService.broadcast(
      EventKeys.LOGIN_BUTTON_CLICKED,
      'UserDetailsComponent: LOGIN_BUTTON_CLICKED'
    );
  }

  loginSuccessful(event: any): void {
    console.log(`UserDetailsComponent.loginSuccessful : ${event}`);
    this.loggedInUserName = event;
    this.isLoggedIn = true;
  }
  onLogoutClicked(): void {
    this.loggedInUserName = '';
    this.isLoggedIn = false;
  }
}
