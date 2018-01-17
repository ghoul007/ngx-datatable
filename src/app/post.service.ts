import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { Subscriber } from "rxjs/Subscriber";
@Injectable()
export class PostService {
  constructor(private _httpService: HttpClient) {}

  getPosts(page): Observable<any> {
    console.log("https://jsonplaceholder.typicode.com/posts?_limit=" + page.size + "&_page=" + page.pageNumber);
    return this._httpService.get(
      "https://jsonplaceholder.typicode.com/posts?_limit="+page.size+"&_page=" +
        page.pageNumber
    );
  }
  searchPostsbtTitle(page, title): Observable<any> {
    console.log("https://jsonplaceholder.typicode.com/posts?_limit=" + page.size + "&_page=" + page.pageNumber+"&title="+title);
    return this._httpService.get(
      "https://jsonplaceholder.typicode.com/posts?_limit="+page.size+"&_page=" +
        page.pageNumber
    );
  }
}
