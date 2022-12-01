import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrandService } from 'src/app/services/brand.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  brand={
    title:''
  }
  constructor(private _brand:BrandService,private _snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.brand.title.trim()=='' || this.brand.title==null){
      this._snack.open("Title Required","",{
        duration:3000
      })
      return;
    }
    this._brand.addBrand(this.brand).subscribe(

      (data:any)=>{
        this.brand.title='';
        Swal.fire("Success !!",'Brand is added successfully','success')
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error !!",'Server Error','error')
      }

    )
  }
}
