import {
  NgModule
} from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import {
  AuthGuard
} from './modules/session';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'app/features/home/home.module#HomeModule',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: 'app/features/account/account.module#AccountModule'
  },
  {
    path: 'support',
    loadChildren: 'app/features/support/support.module#SupportModule'
  },
  {
    path: 'users',
    loadChildren: 'app/features/users/users.module#UsersModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'dibs',
    loadChildren: 'app/features/dibs/dibs.module#DibsModule',
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    loadChildren: 'app/features/page-not-found/page-not-found.module#PageNotFoundModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }