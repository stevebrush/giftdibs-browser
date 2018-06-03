import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

import {
  DropdownMenuItem
} from '../../modules';

import {
  User
} from '../users';

import { Friendship } from './friendship';
import { FriendshipService } from './friendship.service';

@Component({
  selector: 'gd-friendships',
  templateUrl: './friendships.component.html',
  styleUrls: ['./friendships.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendshipsComponent implements OnInit, OnChanges {
  @Input()
  public user: User;

  public friendships: Friendship[];
  public followers: any[];
  public following: any[];
  public isLoading = true;
  public followersMenuItems: DropdownMenuItem[] = [];
  public followingMenuItems: DropdownMenuItem[] = [];

  constructor(
    private changeDetector: ChangeDetectorRef,
    private friendshipService: FriendshipService
  ) { }

  public ngOnInit(): void {
    this.assignFriendships();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.user && !changes.user.isFirstChange()) {
      this.isLoading = true;
      this.changeDetector.markForCheck();
      this.assignFriendships();
    }
  }

  private assignFriendships(): void {
    this.isLoading = true;
    this.changeDetector.markForCheck();
    this.friendshipService
      .getAllByUserId(this.user._id)
      .subscribe((friendships: Friendship[]) => {
        this.friendships = friendships;

        this.followers = friendships
          .filter(friendship => friendship.friend._id === this.user._id)
          .map(friendship => friendship.user);

        this.following = friendships
          .filter(friendship => friendship.user._id === this.user._id)
          .map(friendship => friendship.friend);

        this.followingMenuItems = this.following.map((friend) => {
          return {
            label: `${friend.firstName} ${friend.lastName}`,
            route: `/users/${friend._id}`
          };
        });

        this.followersMenuItems = this.followers.map((friend) => {
          return {
            label: `${friend.firstName} ${friend.lastName}`,
            route: `/users/${friend._id}`
          };
        });

        this.isLoading = false;
        this.changeDetector.markForCheck();
      });
  }
}