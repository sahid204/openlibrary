import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { AdminComponent } from './admin/admin.component';
import { PublishersComponent } from './publishers/publishers.component';
import { StudentsComponent } from './students/students.component';
import { LoanComponent } from './loan/loan.component';
import { AuthorComponent } from './author/author.component';
import { HomeComponent } from './home/home.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddPublishersComponent } from './add-publishers/add-publishers.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddLoansComponent } from './add-loans/add-loans.component';





const routes: Routes = [
  {
    path: 'books',
    component: BookComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'publishers',
    component: PublishersComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'loan',
    component: LoanComponent,
  },
  {
    path: 'authors',
    component: AuthorComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'add-books',
    component: AddBooksComponent,
    
  },
  {
  path: 'add-students',
    component: AddStudentsComponent,
  },
  {
  path: 'add-author',
    component: AddAuthorComponent,
  },
  {
    path: 'add-publishers',
      component: AddPublishersComponent,
    },
    {
      path: 'add-admin',
        component: AddAdminComponent,
      },
      {
        path: 'add-loans',
          component: AddLoansComponent,
        },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
