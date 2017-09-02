import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './components/login/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { MybookComponent }  from './components/mybook/mybook.component';
import { HdbookComponent }  from './components/hdbook/hdbook.component';

const routes: Routes = [
  { path: '', component: MybookComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'mybook', component: MybookComponent },
  { path: 'hdbook',     component: HdbookComponent },
  { path: '**', redirectTo: '' }
  // { path: 'write-story',     component: HeroesComponent },
  // { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
