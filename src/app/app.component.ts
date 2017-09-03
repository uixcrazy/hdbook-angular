import { Component, OnInit } from '@angular/core';
import { User } from './models/index';
import { UserService } from './services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'hdbook';
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
      // get users from secure api end point
      this.userService.getUsers()
          .subscribe(users => {
              this.users = users;
          });
  }

}


