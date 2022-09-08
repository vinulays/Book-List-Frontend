import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  user: User = new User();
  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  isSubmitted = false;
  constructor(private service: UserService) {}

  ngOnInit(): void {}

  createUser() {
    this.user.email = this.form.get('email')?.value;
    this.user.password = this.form.get('password')?.value;

    this.isSubmitted = true;
    this.service.createUser(this.user).subscribe((data) => {
      console.log('User created successfully!');
    });
  }

  closeAlert() {
    this.isSubmitted = false;
  }
}
