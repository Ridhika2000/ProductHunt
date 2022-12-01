import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-review',
  templateUrl: './load-review.component.html',
  styleUrls: ['./load-review.component.css'],
})
export class LoadReviewComponent implements OnInit {
  reviews: any;
  pid: any;
  totalReviews = 0;
  avgRating = 0;
  constructor(private _review: ReviewService, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pid = this._route.snapshot.params['pid'];

    this._review.countReviews(this.pid).subscribe(
      (data: any) => {
        this.totalReviews = data;
      },

      (error) => {
        console.log(error);
      }
    );

    this._review.avgRating(this.pid).subscribe(
      (data: any) => {
        this.avgRating = data;
      },
      (error) => {
        console.log(error);
      }
    );
    this._review.getReviewsByProduct(this.pid).subscribe(
      (data: any) => {
        this.reviews = data;
      },
      (error) => {
        Swal.fire('Error !!', 'Error in loading reviews !', 'error');
      }
    );
  }
}
