import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../_services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private usersService = inject(UsersService);
  toastr = inject(ToastrService);

  cancelRegister = output<boolean>();

  model: any = {};

  register() {
    console.log(this.model);
    this.usersService.register(this.model).subscribe({
      next: (response) => {
        console.log(response);
        this.cancel();
      },
      error: (error) => this.toastr.error(error.error),
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
