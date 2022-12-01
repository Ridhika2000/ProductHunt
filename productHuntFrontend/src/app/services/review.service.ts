import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private _http: HttpClient) {}

  //add review
  public addReview(review: any) {
    return this._http.post(`${baseUrl}/review/`, review);
  }

  //non-approve reviews
  public reviews() {
    return this._http.get(`${baseUrl}/review/non-approve/`);
  }

  //delete review
  public deleteReview(reviewId: any) {
    return this._http.delete(`${baseUrl}/review/${reviewId}`);
  }

  //approve review
  public approveReview(reviewId: any) {
    return this._http.put(`${baseUrl}/review/${reviewId}`, reviewId);
  }

  //approved reviews by productId
  public getReviewsByProduct(pid: any) {
    return this._http.get(`${baseUrl}/review/product/approve/${pid}`);
  }

  //count reviews by productId
  public countReviews(pid: any) {
    return this._http.get(`${baseUrl}/review/count/${pid}`);
  }

  //avg rating
  public avgRating(pid: any) {
    return this._http.get(`${baseUrl}/review/avg/${pid}`);
  }

  //total reviews
  public numberOfReviews(): Observable<any> {
    return this._http.get(`${baseUrl}/review/`);
  }
}
