import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationErrorsDirective } from '@shared/directives/input-errors.directive';

@Component({
  selector: 'app-amdin',
  templateUrl: './amdin-login.component.html',
  styleUrls: ['../../../assets/styles/forms.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ValidationErrorsDirective],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmdinLoginComponent {
  adminLoginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder) {}

  submitForm(): void {
    if (this.adminLoginForm.invalid) {
      return;
    }

    // You can perform form submission logic here
    // For example, sending the form data to a backend API

    console.log(this.adminLoginForm.value);

    // Reset the form after submission
    this.adminLoginForm.reset();
  }
}
