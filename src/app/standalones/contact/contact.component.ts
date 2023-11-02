import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationErrorsDirective } from '@shared/directives/input-errors.directive';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../../../assets/styles/forms.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ValidationErrorsDirective]
})
export class ContactComponent {
  contactForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {}
  
  submitForm(): void {
    if (this.contactForm.invalid) {
      return;
    }

    // You can perform form submission logic here
    // For example, sending the form data to a backend API

    console.log(this.contactForm.value);

    // Reset the form after submission
    this.contactForm.reset();
  }
}