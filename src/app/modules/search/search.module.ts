import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  HTTP_INTERCEPTORS,
  HttpClientModule
} from '@angular/common/http';

import {
  RouterModule
} from '@angular/router';

import { AuthInterceptor } from '../session/authorization.interceptor';
import { TypeaheadModule } from '../typeahead/typeahead.module';

import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TypeaheadModule,
    RouterModule
  ],
  exports: [
    SearchComponent
  ],
  declarations: [
    SearchComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class SearchModule { }
