import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './not-found.component';
import { LoginComponent } from './components/login/login.component';
import { MybookComponent }  from './components/mybook/mybook.component';
import { HdbookComponent }  from './components/hdbook/hdbook.component';

const routes: Routes = [
  { path: '',   redirectTo: '/mybook', pathMatch: 'full' },
  // { path: '', component: MybookComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'mybook', component: MybookComponent, canActivate: [AuthGuard] },
  { path: 'hdbook', component: HdbookComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
  // { path: 'write-story',     component: HeroesComponent },
  // { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
