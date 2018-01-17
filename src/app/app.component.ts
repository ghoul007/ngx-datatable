import { Component } from "@angular/core";
import { PostService } from "./post.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  selected: any=[];
  page = new Page();
  rows = new Array<Post>();

  constructor(private postservice: PostService) {
    this.page.pageNumber = 0;
    this.page.size = 20;
  }

  ngOnInit() {


    this.setPage({ offset: 0 });
  }




  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
  // this.page.pageNumber = pageInfo.offset;
  this.postservice.getPosts(this.page).subscribe(res => {
    this.page = {
      size: 10,
      totalElements: 100,
      totalPages: 10,
      pageNumber: pageInfo.offset
    };
    this.rows = res;
    console.log("pages   ", this.page)
  });
  }


  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  add() {
    this.selected.push(this.rows[1], this.rows[3]);
  }

  update() {
    this.selected = [ this.rows[1], this.rows[3] ];
  }

  remove() {
    this.selected = [];
  }

  displayCheck(row) {
    return row.name !== 'Ethel Price';
  }

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
