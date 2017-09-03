import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        // this.alertService.error(error);
        this.loading = false;
      });
  }
}


// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// import { AuthenticationService } from '../../services/authentication.service';

// @Component({
//   moduleId: module.id,
//   templateUrl: 'login.component.html'
// })

// export class LoginComponent implements OnInit {
//   model: any = {};
//   loading = false;
//   error = '';

//   constructor(
//     private router: Router,
//     private authenticationService: AuthenticationService) { }

//   ngOnInit() {
//     // reset login status
//     this.authenticationService.logout();
//   }

//   login() {
//     this.loading = true;
//     this.authenticationService.login(this.model.username, this.model.password)
//       .subscribe(result => {
//         if (result === true) {
//           this.router.navigate(['/']);
//         } else {
//           this.error = 'Username or password is incorrect';
//           this.loading = false;
//         }
//       });
//   }
// }
