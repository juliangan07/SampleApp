import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { PostsService } from './posts.service';
import { PostsComponent } from './posts/posts.component';
import { Tracker } from './tracker';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'posts-detail',
  templateUrl: 'posts-detail.component.html',
  styleUrls: ['posts-detail.component.css'],
  providers: [PostsService]
})
export class PostsDetail implements OnInit{
  post: any = [];
  tracker: any = [];
  errorMessage: string;
  startDate: any;
  endDate: any;

  constructor(
      private postsService: PostsService,
      private route: ActivatedRoute,
      private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.postsService.getPostByID(+params['id']))
    .subscribe(post => this.post = post);
  }

  goBack() {
      this.location.back();
  }

  // getTrackerData() {
  //     this.postsService.getTrackerData().subscribe(tracker => {
  //     this.tracker = tracker;
  //   });
  // }

  getTracker() {
     this.postsService.getTracker().then(tracker => this.tracker = tracker, error => this.errorMessage = <any>error);
   }

  // getTrackerByDate() {
  //   this.postsService.getTrackerByDate(+params["startDate", "endDate"]))
  //   .subscribe(tracker => this.tracker = tracker)
  // }

}
