import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  loggedInUserName: string = 'logged_in_user';
  constructor() {}
  ngOnInit(): void {}
  @Output() notify = new EventEmitter();
  onLoginClicked() {
    console.log(`UserDetailsComponent : onLoginClicked()`);
    this.notify.emit('UserDetailsComponent : emit value');
  }
}
