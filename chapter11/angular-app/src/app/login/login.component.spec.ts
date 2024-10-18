import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { BroadcastService, EventKeys } from '../services/broadcast.service';
import { SharedModule } from '../shared/shared.module';
import { FormBuilder } from '@angular/forms';

describe('src/app/login/login.component.ts', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  // adding new code (which can cause crash)
  let broadcastService: BroadcastService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // adding new code
      imports: [SharedModule],
      declarations: [LoginComponent],
      // adding new code
      providers: [FormBuilder, BroadcastService],
    }).compileComponents();

    // adding new code
    beforeEach(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      broadcastService = TestBed.inject(BroadcastService);
      fixture.detectChanges();
    });

    // adding new code
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // adding new code
  it('should set form fields correctly on startup', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm?.value.username).toEqual('');
    expect(component.loginForm?.value.password).toEqual('');
  });

  // adding new code
  it('should set form validity correctly', () => {
    expect(component.isFormValid()).toBeFalse();
    component.loginForm?.controls['username'].setValue('test_username');
    expect(component.isFormValid()).toBeFalse();
    component.loginForm?.controls['password'].setValue('test_password');
    expect(component.isFormValid()).toBeTrue();
  });

  // adding new code
  it('should broadcast an event when the login button is clicked', () => {
    component.loginForm?.controls['username'].setValue('test_username');
    component.loginForm?.controls['password'].setValue('test_password');

    fixture.detectChanges();
    const loginButton =
      fixture.debugElement.nativeElement.querySelector('#submit_button');
    expect(loginButton.disabled).toBeFalsy();

    loginButton.click();

    expect(broadcastService.broadcast).toHaveBeenCalledWith(
      EventKeys.USER_LOGIN_EVENT,
      'test_username'
    );
  });
});
