import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrandService } from 'src/app/services/brand.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  brands: any;
  productData = {
    pName: '',
    description: '',
    pCode: '',
    active: true,
    brand: {
      bid: '',
    },
  };

  constructor(
    private _brand: BrandService,
    private _snack: MatSnackBar,
    private _product: ProductService
  ) {}

  ngOnInit(): void {
    this._brand.brands().subscribe(
      (data: any) => {
        this.brands = data;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'error in loading data from server', 'error');
      }
    );
  }

  addProduct() {
    if (this.productData.pName.trim() == '' || this.productData.pName == null) {
      this._snack.open('Name of product Required !!', '', {
        duration: 3000,
      });
      return;
    } else if (
      this.productData.pCode.trim() == '' ||
      this.productData.pCode == null
    ) {
      this._snack.open('Product Code is Required !!', '', {
        duration: 3000,
      });
      return;
    } else if (
      this.productData.description.trim() == '' ||
      this.productData.description == null
    ) {
      this._snack.open('Description about product Required !!', '', {
        duration: 3000,
      });
      return;
    } else {
      //call server
      this._product.addProduct(this.productData).subscribe(
        (data) => {
          Swal.fire('Success', 'product is added', 'success');
          this.productData = {
            pName: '',
            description: '',
            pCode: '',
            active: true,
            brand: {
              bid: '',
            },
          };
        },
        (error) => {
          Swal.fire('Error !!', 'Error while adding product', 'error');
        }
      );
    }
  }
}
