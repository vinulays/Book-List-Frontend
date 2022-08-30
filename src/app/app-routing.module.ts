import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'list', component: BookListComponent, canActivate: [AuthGuard] },
  { path: 'create', component: BookCreateComponent, canActivate: [AuthGuard] },
  {
    path: 'update/:id',
    component: BookUpdateComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
