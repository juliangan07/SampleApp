import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {
  // instantiate posts to an empty array
  posts: Post[];
  selectedID: Post;
  errorMessage: string;

  constructor(
    private postsService: PostsService,
    private router: Router
    ) { }

  //  getTracker() {
  //    this.postsService.getTracker().then(posts => this.posts = posts, error => this.errorMessage = <any>error);
  //  }

  ngOnInit(): void {
    // Retrieve posts from API
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
      });
    // this.getPosts();

  }

  // postDetail(): void {
  //   this.router.navigate(['/posts', this.selectedID.id]);
  // }

  // onSelect(post: Post): void {
  //   this.selectedID = post;
  // }

  // getID(id: number): void {
  //   this.selectedID = id;
  // }
}
