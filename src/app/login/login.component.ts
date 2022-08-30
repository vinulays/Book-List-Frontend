import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  isCredentialsCorrect: Boolean = true;

  constructor(
    private service: UserService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  login() {
    this.service.login(this.user).subscribe((data) => {
      if (data == null) {
        this.isCredentialsCorrect = false;
      } else {
        localStorage.setItem(
          'token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsIm5hbWUiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE1MTYyMzkwMjJ9.I2l85RsRwKJ8gsKPp2nDtjf2orjNLhiUax6uHTCKpyc'
        );
        this.isCredentialsCorrect = true;
        this.router.navigateByUrl('list');
      }
    });
  }
}
