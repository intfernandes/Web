import { Component, input } from '@angular/core';
import { Customer } from '../../_models/customer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './customer-card.component.html',
  styleUrl: './customer-card.component.css',
})
export class CustomerCardComponent {
  customer = input.required<Customer>();
}
