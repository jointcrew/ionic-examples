import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninPage } from './signin/signin.page';
import { SignupPage } from './signup/signup.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupPage
  },
  {
    path: 'signin',
    component: SigninPage
  }
];

@NgModule({
  declarations: [SigninPage, SignupPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule {}
