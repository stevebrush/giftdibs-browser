import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  RouterModule
} from '@angular/router';

import {
  CommentModule
} from '@app/shared/modules/comment';

import {
  DibControlsModule
} from '@app/shared/modules/dib-controls';

import {
  GiftModule
} from '@app/shared/modules/gift';

import {
  GiftEditModule
} from '@app/shared/modules/gift-edit';

import {
  GiftMoveModule
} from '@app/shared/modules/gift-move';

import {
  GiftPriorityModule
} from '@app/shared/modules/gift-priority';

import {
  ConfirmModule,
  DateTimeModule,
  DisclosureModule,
  DropdownMenuModule,
  GridModule,
  IconModule,
  MediaModule,
  ModalModule,
  NoticeModule,
  ThumbnailModule,
  WaitModule
} from '@giftdibs/ux';

import {
  ProductPreviewModule
} from '@app/shared/modules/product-preview';

import { GiftDetailComponent } from './gift-detail.component';

@NgModule({
  imports: [
    CommonModule,
    DateTimeModule,
    DisclosureModule,
    GiftModule,
    GiftMoveModule,
    CommentModule,
    ConfirmModule,
    DibControlsModule,
    DropdownMenuModule,
    GiftEditModule,
    GiftPriorityModule,
    GridModule,
    IconModule,
    MediaModule,
    ModalModule,
    NoticeModule,
    ProductPreviewModule,
    RouterModule,
    ThumbnailModule,
    WaitModule
  ],
  declarations: [
    GiftDetailComponent
  ],
  entryComponents: [
    GiftDetailComponent
  ]
})
export class GiftDetailModule { }
