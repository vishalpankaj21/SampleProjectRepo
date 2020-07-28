import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { Observable } from "rxjs";
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  id: number;
  bookDetails: Observable<Book[]>;

  constructor(private route: ActivatedRoute,private router: Router,
    private libraryService: LibraryService) { }

 

  ngOnInit() {
 

    this.id = this.route.snapshot.params['id'];
    
    this.libraryService.getAllBooksOfLibrary(this.id)
      .subscribe(data => {
        console.log(data)
        this.bookDetails = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['libraries']);
  }

}
