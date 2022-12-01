import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-reviews',
  templateUrl: './view-reviews.component.html',
  styleUrls: ['./view-reviews.component.css'],
})
export class ViewReviewsComponent implements OnInit {
  reviews: any;

  constructor(private _review: ReviewService) {}

  ngOnInit(): void {
    this._review.reviews().subscribe(
      (data: any) => {
        this.reviews = data;
      },
      (error) => {
        Swal.fire('Error !!', 'Error in loading reviews !', 'error');
      }
    );
  }

  //delete review
  deleteReview(reviewId: any) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure?',
      confirmButtonText: 'Reject',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this._review.deleteReview(reviewId).subscribe(
          (data) => {
            this.reviews = this.reviews.filter(
              (review: any) => review.reviewId != reviewId
            );
            Swal.fire('Success', 'Review rejected', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Error in rejecting review', 'error');
          }
        );
      }
    });
  }

  //approve review
  approveReview(reviewId: any) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure?',
      confirmButtonText: 'Approve',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this._review.approveReview(reviewId).subscribe(
          (data) => {
            this.reviews = this.reviews.filter(
              (review: any) => review.isApprove != true
            );

            Swal.fire('Success', 'Review approved', 'success');
            window.location.reload();
            // this._router.navigate([this._router.url]);
          },
          (error) => {
            Swal.fire('Error', 'Error in approving review ', 'error');
          }
        );
      }
    });
  }
}
