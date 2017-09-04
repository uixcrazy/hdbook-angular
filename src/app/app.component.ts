import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from './models/index';
import { Router } from '@angular/router';

import { UserService } from './services/index';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from './services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'hdbook';
  // users: User[] = [];
  currentUser: User;
  subscription: Subscription;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    // private userService: UserService ↑  ↑  ↑
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // subscribe to login component messages
    this.subscription = this.authenticationService.getMessage()
      .subscribe(message => {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!message) {
          this.router.navigateByUrl('/login');
        }
      });
  }

  userLogout() {
    this.authenticationService.logout();
  }

  ngOnInit() {
    console.log('init');
    // get users from secure api end point
    // this.userService.getUsers()
    //     .subscribe(users => {
    //         this.users = users;
    //     });
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }
}
