import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SigninModalComponent } from './signin-modal/signin-modal.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap/alert';



@NgModule({
  declarations: [SigninComponent, SignupComponent, SigninModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    HttpClientModule
  ],
  exports: [SigninComponent, SignupComponent, SigninModalComponent]
})
export class SharedModule { }
