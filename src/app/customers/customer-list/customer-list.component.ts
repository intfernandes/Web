import { Component, inject, OnInit } from '@angular/core';
import { CustomersService } from '../../_services/customers.service';
import { Customer } from '../../_models/customer';
import { ToastrService } from 'ngx-toastr';
import { CustomerCardComponent } from "../customer-card/customer-card.component";

@Component({
  selector: 'app-customers-list',
  standalone: true,
  imports: [CustomerCardComponent],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css',
})
export class CustomersListComponent implements OnInit {
  customersService = inject(CustomersService);
  toatr = inject(ToastrService);
  customers: Customer[] = [];

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customersService.getCustomers().subscribe({
      next: (customers) => (this.customers = customers),
      error: (error) => this.toatr.error(error),
    });
  }
}
