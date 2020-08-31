import { UsernameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(
        ' ',
        [
          Validators.required,
          Validators.minLength(3),
          UsernameValidators.cannotContainSpace,
        ],
        UsernameValidators.shouldBeUnique
      ),
      password: new FormControl('', Validators.required),
    }),
  });

  login() {
    // let isValid = authService.login(this.form.value);
    // if(!isValid) {
    this.form.setErrors({
      inValigLogin: true,
    });
    // }
  }

  get username() {
    return this.form.get('account.username');
  }
}
