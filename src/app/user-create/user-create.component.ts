import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  user: User = new User();
  isSubmitted = false;
  constructor(private service: UserService) {}

  ngOnInit(): void {}

  createUser() {
    this.isSubmitted = true;
    this.service.createUser(this.user).subscribe((data) => {
      console.log('User created successfully!');
    });
  }

  closeAlert() {
    this.isSubmitted = false;
  }
}
