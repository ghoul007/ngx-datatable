import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
@Injectable()
export class PostService {
  constructor(private _httpService: HttpClient) {}

  getPosts(): Observable<any> {
    return this._httpService
      .get("https://jsonplaceholder.typicode.com/posts")
  }
}
