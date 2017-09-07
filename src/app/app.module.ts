import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2SmartTableModule } from '../assets/component/ng2-smart-table';


import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

// create fake backend
import { AuthGuard } from './guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';

// services
import { AuthenticationService, UserService } from './services/index';

// components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';
import { MybookComponent }  from './components/mybook/mybook.component';
import { HdbookComponent }  from './components/hdbook/hdbook.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    MybookComponent,
    HdbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
