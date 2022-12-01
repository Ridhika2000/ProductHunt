import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
})
export class AddReviewComponent implements OnInit {
  pid: any;
  reviewData = {
    reviewTitle: '',
    content: '',
    rating: 0,
    product: {
      pId: '',
    },
  };

  myForm: FormGroup | any;

  constructor(
    private _route: ActivatedRoute,
    private _review: ReviewService,
    private _snack: MatSnackBar,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      revTitle: new FormControl('', [
        Validators.required,
        Validators.maxLength(40),
      ]),
      revContent: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(400),
      ]),
      revRating: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(5),
      ]),
    });

    this.pid = this._route.snapshot.params['pid'];
    this.reviewData.product.pId = this.pid;
  }

  public myError = (controlName: string, errorName: string) => {
    return this.myForm.controls[controlName].hasError(errorName);
  };

  addReview() {
    console.log(this.reviewData);
    if (
      this.reviewData.reviewTitle.trim() == '' ||
      this.reviewData.reviewTitle == null
    ) {
      this._snack.open('Title of review Required !!', '', {
        duration: 3000,
      });
      return;
    } else if (
      this.reviewData.content.trim() == '' ||
      this.reviewData.content == null
    ) {
      this._snack.open('Content for review Required !!', '', {
        duration: 3000,
      });
      return;
    } else if (this.reviewData.rating == 0 || this.reviewData.rating == null) {
      this._snack.open('Rating for review Required !!', '', {
        duration: 3000,
      });
    } else {
      //call server
      this._review.addReview(this.reviewData).subscribe(
        (data) => {
          Swal.fire(
            'Success',
            'review is submitted !! Wait until it gets approved',
            'success'
          );
          this.myForm.reset();
          // this.reviewData = {
          //   reviewTitle: '',
          //   content: '',
          //   rating: 1,
          //   product: {
          //     pId: '',
          //   },
          // };
        },
        (error) => {
          Swal.fire('Error !!', 'Error while posting review', 'error');
        }
      );
    }
  }
}

//   addProduct(){

//     if(this.reviewData.reviewTitle.trim()=='' || this.reviewData.reviewTitle==null){
//       this._snack.open("Name of product Required !!",'',{
//         duration:3000,
//       })
//       return;
//     }

//     //call server
//     this._product.addProduct(this.reviewData).subscribe(
//       (data)=>{
//         Swal.fire('Success','product is added','success');
//         this.reviewData={
//           pName:'',
//           description:'',
//           pCode:'',
//           active:true,
//           brand:{
//             bid:''

//           }
//         }
//       },
//       (error)=>{
//         Swal.fire('Error !!','Error while adding quiz','error');
//       }
//     )
//   }

// }

// export class AddProductComponent implements OnInit {

//   brands:any;

//   constructor(private _brand:BrandService,private _snack:MatSnackBar,private _product:ProductService) { }

//   ngOnInit(): void {

//     this._brand.brands().subscribe(
//       (data:any)=>{
//         this.brands=data;
//       },(error)=>{
//         console.log(error);
//         Swal.fire("Error !!",'error in loading data from server','error')
//       }
//     )
//   }
