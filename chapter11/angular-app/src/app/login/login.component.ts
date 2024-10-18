import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BroadcastService } from '../services/broadcast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | null = null;
  constructor(
    private formBuilder: FormBuilder,
    private broadcastService: BroadcastService
  ) {}
  ngOnInit(): void {
    console.log(`buildForm()`);
    this.buildForm();
  }
  buildForm() {
    let form = {
      username: new FormControl({}, Validators.required),
      password: new FormControl({}, Validators.required),
    };
    let formState = {
      username: {
        value: '',
        disabled: false,
      },
      password: {
        value: '',
        disabled: false,
      },
    };
    this.loginForm = this.formBuilder.group(form);
    this.loginForm.reset(formState);
  }
  isFormValid() {
    return this.loginForm?.valid;
  }
}
