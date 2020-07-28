import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryDetailsComponent } from './library-details/library-details.component';
import { BookListComponent } from './book-list/book-list.component';




const routes: Routes = [
  { path: '', redirectTo: 'libraries', pathMatch: 'full' },
  { path: 'libraries', component: LibraryDetailsComponent },
  { path: 'books/library/:id', component: BookListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
