import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-load-product',
  templateUrl: './load-product.component.html',
  styleUrls: ['./load-product.component.css']
})
export class LoadProductComponent implements OnInit {

  bId:any;
  products:any
  searchTerm: any;
  constructor(
    private _route:ActivatedRoute,
    private _product:ProductService
  ) { }

  ngOnInit(): void {

    this._route.params.subscribe((params)=>{
      this.bId=params['bId'];
      if(this.bId == 0){
        console.log('Load all the products')
        this._product.getActiveProducts().subscribe(
          (data:any)=>{
            this.products=data;
            console.log(this.products)
          },
          (error)=>{
            console.log(error);
            Swal.fire("Error !!","Error in loading all products",'error');
          }
        )
      }else{
        console.log('Load specific product')
        this._product.getActiveProductsOfBrand(this.bId).subscribe(
          (data:any)=>{
            this.products=data;
          },
          (error)=>{
            Swal.fire("Error !!","Error in loading all products by brand",'error');
          }
          
        )
      }
    })
   
    
  }

  searchProduct(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm)
    this._product.searchProduct(this.searchTerm).subscribe(
      (res)=>{
        console.log(res)
        this.products=res
      }
    )
  }

}
