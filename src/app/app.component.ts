import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  error = null;

  constructor(private httpService: HttpService) {}
  posts: Post[];

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.httpService.getPosts().subscribe(posts => this.posts = posts.slice(0, 30),
    error => {
      console.error('Couldn\'t fetch data');
      this.error = error;
    });
  }

}
