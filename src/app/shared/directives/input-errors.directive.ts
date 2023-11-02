import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appValidationErrors]',
  standalone: true,
})
export class ValidationErrorsDirective {
  constructor(private el: ElementRef, private control: NgControl) {}

  @HostListener('blur')
  onFieldBlur() {
    const inputElement = this.el.nativeElement;
    const errorElement = document.createElement('div');
    errorElement.className = 'validation-error';

    const control = this.control.control;
    if (control && control.touched && control.invalid) {
      const errors = control.errors;
      if (errors) {
        const errorMessages = Object.keys(errors).map(key => this.getErrorMessage(key, errors[key]));
        errorElement.textContent = errorMessages.join(', ');
      }
    }

    this.clearExistingErrors();
    if (errorElement.textContent) {
      inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
    }
  }

  private clearExistingErrors() {
    const siblings = this.el.nativeElement.parentNode.children;
    for (let i = 0; i < siblings.length; i++) {
      if (siblings[i].className === 'validation-error') {
        siblings[i].remove();
        break;
      }
    }
  }

  private getErrorMessage(errorName: string, errorValue: any): string {
    switch (errorName) {
      case 'required':
        return 'This field is required';
      case 'email':
        return 'Invalid email address';
      case 'minlength':
        return `Minimum length is ${errorValue.requiredLength}`;
      case 'maxlength':
        return `Maximum length is ${errorValue.requiredLength}`;
      case 'pattern':
        return 'Invalid input';
      default:
        return 'Validation error';
    }
  }
}
