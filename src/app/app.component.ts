import { Component, inject, OnInit } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { UsersService } from './_services/users.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private usersService = inject(UsersService);

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userStr = localStorage.getItem('user');

    if (!userStr) return;

    const user = JSON.parse(userStr);

    this.usersService.currentUser.set(user);
  }
}
