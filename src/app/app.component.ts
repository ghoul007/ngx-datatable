import { Component } from "@angular/core";
import { PostService } from "./post.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  page = new Page();
  rows = new Array<Post>();

  constructor(private postservice: PostService) {
    this.page.pageNumber = 0;
    this.page.size = 20;
  }

  ngOnInit() {
    this.postservice.getPosts().subscribe(res => {
      this.page = {
        size: 5,
        totalElements: res.length,
        totalPages: Math.floor(res.length / 5),
        pageNumber: 1
      };
      this.rows = res;
    });

    // this.setPage({ offset: 0 });
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  // setPage(pageInfo) {
  // this.page.pageNumber = pageInfo.offset;
  // this.serverResultsService.getResults(this.page).subscribe(pagedData => {
  // this.page = pagedData.page;
  // this.rows = pagedData.data;
  // });
  // }
}

/**
 * An object used to get page information from the server
 */
export class Page {
  //The number of elements in the page
  size: number = 0;
  //The total number of elements
  totalElements: number = 0;
  //The total number of pages
  totalPages: number = 0;
  //The current page number
  pageNumber: number = 0;
}

export interface Post {
  title: string;
  body: string;
}
