import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private libraryDetailsUrl = 'http://localhost:8080/libraries';

  private bookListByIdUrl = 'http://localhost:8080/books/library';

  constructor(private http: HttpClient) { }

  getAllBooksOfLibrary(id: number): Observable<any> {
    return this.http.get(`${this.bookListByIdUrl}/${id}`);
  }

  getLibraryList(): Observable<any> {
    return this.http.get(`${this.libraryDetailsUrl}`);
  }
}
