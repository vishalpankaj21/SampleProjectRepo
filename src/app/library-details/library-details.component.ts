import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Library } from '../library';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-library-details',
  templateUrl: './library-details.component.html',
  styleUrls: ['./library-details.component.scss']
})
export class LibraryDetailsComponent implements OnInit {

  libraryList: Observable<Library[]>;

  constructor(private libraryService: LibraryService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.libraryList = this.libraryService.getLibraryList();
  }



  bookDetails(id: number){
    this.router.navigate(['books/library', id]);
  }

}
