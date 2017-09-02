import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MybookComponent }  from './components/mybook/mybook.component';
import { HdbookComponent }  from './components/hdbook/hdbook.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'mybook', component: MybookComponent },
  { path: 'hdbook',     component: HdbookComponent },
  // { path: 'write-story',     component: HeroesComponent },
  // { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
