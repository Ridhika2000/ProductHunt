import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { ProductService } from 'src/app/services/product.service';
import { ReviewService } from 'src/app/services/review.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  totalUsers = 0;
  totalProducts = 0;
  totalBrands = 0;
  totalReviews = 0;
  pid: any;

  constructor(
    private _user: UserService,
    private _product: ProductService,
    private _brand: BrandService,
    private _review: ReviewService
  ) {}

  ngOnInit(): void {
    this._user.countOfUsers().subscribe(
      (data: any) => {
        this.totalUsers = data;
      },
      (error: any) => {
        console.log(error);
      }
    );

    this._product.countOfProducts().subscribe(
      (data: any) => {
        this.totalProducts = data;
      },
      (error: any) => {
        console.log(error);
      }
    );

    this._brand.countOfBrands().subscribe(
      (data: any) => {
        this.totalBrands = data;
      },
      (error: any) => {
        console.log(error);
      }
    );

    this._review.numberOfReviews().subscribe(
      (data: any) => {
        this.totalReviews = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
