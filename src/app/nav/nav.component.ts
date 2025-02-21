import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../_services/users.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    FormsModule,
    BsDropdownModule,
    RouterLink,
    RouterLinkActive,
    TitleCasePipe,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  usersService = inject(UsersService);
  router = inject(Router);
  toastr = inject(ToastrService);
  model: any = {};

  login() {
    this.usersService.login(this.model).subscribe({
      next: (_) => this.router.navigateByUrl('/customers'),
      error: (error) => this.toastr.error(error.error),
    });
  }

  logout() {
    this.usersService.logout();
    this.router.navigateByUrl('/');
  }
}
