import { Component, inject, OnInit } from '@angular/core';
import { CustomersService } from '../../_services/customers.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../_models/customer';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [TabsModule, GalleryModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css',
})
export class CustomerDetailsComponent implements OnInit {
  private customerService = inject(CustomersService);
  private route = inject(ActivatedRoute);
  customer?: Customer;
  images: GalleryItem[] = [];

  ngOnInit(): void {
    this.loadCustomer();
  }

  loadCustomer() {
    const customerID = this.route.snapshot.paramMap.get('id');
    const id = Number(customerID);
    if (isNaN(id)) return;
    this.customerService.getCustomerById(id).subscribe({
      next: (result) => {
        this.customer = result;
        this.customer.photos.map((p) => {
          if (p.imageUrl) {
            this.images.push(
              new ImageItem({ src: p.imageUrl, thumb: p.imageUrl })
            );
          }
        });
      },
    });
  }
}
