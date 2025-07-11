import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { LoginPayload } from '../../app.types';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-page',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class LoginPageComponent {
  loginCredentials= new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  matcher = new MyErrorStateMatcher();
  passMatcher = new MyErrorStateMatcher();
  authService = inject(AuthService);
  router = inject(Router);
  dataService = inject(DataService);

  login(){
    const credentials: LoginPayload = {
      email: this.loginCredentials.controls.email.value!,
      password: this.loginCredentials.controls.password.value!
    }
    this.authService.login(credentials).subscribe({
      next: (res: any) =>{
        this.authService.setRole(res[0].role);
        this.dataService.setName(res[0].name);
        this.router.navigate([this.authService.getRole()]);
      }
    })
  }
}
