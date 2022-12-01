import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css']
})
export class UpdateBrandComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private _brand:BrandService,private _router:Router) { }

  brand:any
  bId=0;
  
  ngOnInit(): void {
    this.bId = this._route.snapshot.params['bid'];
    this._brand.getBrand(this.bId).subscribe(
      (data:any)=>{
        this.brand=data;
      },
      (error)=>{
        Swal.fire("Error !!","Error in loading data",'error');
      }
    )

  }

  //update form submit
  public updateData(){
    //validate

    this._brand.updateBrand(this.brand).subscribe(
      (data)=>{
        Swal.fire("Success !!",'brand updated','success' ).then((e)=>{
          this._router.navigate(['/admin/brands'])
        });
      },
      (error)=>{
        Swal.fire("Error !!",'error in updating brand','error' );
      }
    )
  }
}
