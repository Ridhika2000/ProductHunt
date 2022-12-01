import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private _product:ProductService,private _brand:BrandService,private _router:Router) { }
  brands:any
  pId=0;
  product:any;

  ngOnInit(): void {
    this.pId = this._route.snapshot.params['pid'];
    this._product.getProduct(this.pId).subscribe(
      (data:any)=>{
        this.product=data;
      },
      (error)=>{
        console.log(error);
      }
    )

    this._brand.brands().subscribe(
      (data:any)=>{
        this.brands=data
      },
      (error)=>{
        Swal.fire("Error !!","Error in loading data",'error');
      }
    )
  }

  //update form submit
  public updateData(){
    //validate

    this._product.updateProduct(this.product).subscribe(
      (data)=>{
        Swal.fire("Success !!",'product updated','success' ).then((e)=>{
          this._router.navigate(['/admin/products'])
        });
      },
      (error)=>{
        Swal.fire("Error !!",'error in updating product','error' );
      }
    )
  }

}
