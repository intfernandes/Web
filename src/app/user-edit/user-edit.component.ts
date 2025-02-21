import { Component, inject, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UsersService } from '../_services/users.service';
import { CustomersService } from '../_services/customers.service';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [TabsModule, FormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
})
export class UserEditComponent implements OnInit {
  user?: User;
  private users = inject(UsersService);
  private customers = inject(CustomersService);

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    const currentUser = this.users.currentUser();
    if (currentUser) {
      this.user = currentUser;
    }
  }

  updateMember() {}
}
