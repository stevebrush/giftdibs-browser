import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UsersComponent
  },
  {
    path: ':userId',
    pathMatch: 'full',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
