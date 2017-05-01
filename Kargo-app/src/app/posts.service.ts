import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Post } from './post';

@Injectable()
export class PostsService {
  private postUrl = "https://jsonplaceholder.typicode.com/posts";
  private trackerUrl = "http://kargotest.herokuapp.com/api/trackers?from=2015-01-01&to=2015-03-01";

  constructor(private http: Http) {}

  // Get all post from API
  getAllPosts() {
    // return this.http.get('/api/posts')
    return this.http.get(this.postUrl)
    .map(res => res.json());
  }

  getPostByID(id: number){
    const url = `${this.postUrl}/${id}`;

    return this.http.get(url)
    .map(res => res.json());
  }

  getTrackerByDate(startDate: any, endDate: any) {
    const url = `http://kargotest.herokuapp.com/api/trackers?from=${startDate}&to=${endDate}`;

    return this.http.get(url)
    .toPromise()
    .then(this.extractData)
    .catch(this.handleError);
  }

  getTracker(): Promise<Post[]> {
    return this.http.get(this.trackerUrl)
    .toPromise()
    .then(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;

    if(error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message?error.message: error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  
}
