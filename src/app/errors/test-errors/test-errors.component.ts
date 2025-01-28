import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-test-errors',
  standalone: true,
  imports: [],
  templateUrl: './test-errors.component.html',
  styleUrl: './test-errors.component.css',
})
export class TestErrorsComponent {
  baseUrl = 'https://localhost:5001/api/v1/';
  private http = inject(HttpClient);
  private accountService = inject(AccountService);
  validationErrors: string[] = [];

  test400() {
    this.http.get(this.baseUrl + 'bugs/bad-request').subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => console.log(error),
    });
  }

  test401() {
    this.http.get(this.baseUrl + 'bugs/auth').subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => console.log(error),
    });
  }

  test404() {
    this.http.get(this.baseUrl + 'bugs/not-found').subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => console.log(error),
    });
  }

  test500() {
    this.http.get(this.baseUrl + 'bugs/server-error').subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => console.log(error),
    });
  }

  registerError() {
    this.accountService.register({ email: '', password: '' }).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        this.validationErrors = error;
        console.log(error);
      },
    });
  }
}
