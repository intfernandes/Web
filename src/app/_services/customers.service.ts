import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Customer } from '../_models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private http = inject(HttpClient);
  baseUrl = environment.apiUrl;

  getCustomers() {
    return this.http.get<Customer[]>(this.baseUrl + 'customers');
  }

  getCustomerById(id: number) {
    return this.http.get<Customer>(this.baseUrl + 'customers/' + id);
  }
}
