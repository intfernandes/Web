import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { UsersService } from '../../_services/users.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-test-errors',
  standalone: true,
  imports: [],
  templateUrl: './test-errors.component.html',
  styleUrl: './test-errors.component.css',
})
export class TestErrorsComponent {
  baseUrl = environment.apiUrl;
  private http = inject(HttpClient);
  private usersService = inject(UsersService);
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
    this.usersService.register({ email: '', password: '' }).subscribe({
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
