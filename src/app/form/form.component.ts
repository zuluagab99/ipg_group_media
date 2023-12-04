import { Component } from '@angular/core';

@Component({
  selector: 'app-your-form',
  standalone: true,
  template: `
    <form #myForm="ngForm" (ngSubmit)="onSubmit()">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" [(ngModel)]="formData.name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" [(ngModel)]="formData.email" required>

      <button type="submit">Submit</button>
    </form>

    <div *ngIf="submitted">
      <h2>Form Data:</h2>
      <p>Name: {{ formData.name }}</p>
      <p>Email: {{ formData.email }}</p>
    </div>
  `,
})
export class YourFormComponent {
  formData = { name: '', email: '' };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    // Do something with this.formData
  }
}
