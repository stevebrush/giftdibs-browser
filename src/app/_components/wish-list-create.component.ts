import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { User } from '../_models';
import { AlertService, WishListService } from '../_services';

@Component({
  selector: 'app-wish-list-create-form',
  templateUrl: './wish-list-create.component.html'
})
export class WishListCreateComponent {
  public wishListForm: FormGroup;
  // public isVisible = false;
  public isLoading = false;
  public isActive = false;
  public errors: any;

  @Input()
  public user: User;

  @Output()
  public onSuccess: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  public onError: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('nameInput')
  public nameInput: ElementRef;

  constructor(
    private alertService: AlertService,
    private wishListService: WishListService,
    private formBuilder: FormBuilder) {
      this.createForm();
    }

  public createWishList(): void {
    this.isLoading = true;
    const formData = this.wishListForm.value;
    this.wishListService
      .create(formData)
      .first()
      .finally(() => this.isLoading = false)
      .subscribe(
        (data: any) => {
          this.wishListForm.reset();
          this.onSuccess.emit();
          this.alertService.success(data.message);
        },
        (err: any) => {
          this.errors = err.errors;
          this.onError.emit(err);
          this.alertService.error(err.message);
        }
      );
  }

  public toggleIsActive(): void {
    this.isActive = !this.isActive;
    if (this.isActive) {
      setTimeout(() => {
        this.nameInput.nativeElement.focus();
      }, 0);
    }
  }

  private createForm(): void {
    this.wishListForm = this.formBuilder.group({
      name: ''
    });
  }
}