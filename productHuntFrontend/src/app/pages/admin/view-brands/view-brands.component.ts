import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-brands',
  templateUrl: './view-brands.component.html',
  styleUrls: ['./view-brands.component.css']
})
export class ViewBrandsComponent implements OnInit {

  brands = [
    {
      bid:'',
      title:''
    }
  ]
  constructor(private _brand:BrandService) { }

  ngOnInit(): void {

    this._brand.brands().subscribe((data:any)=>{

      this.brands=data;
      console.log(this.brands)
    },
    
    (error)=>{
      console.log(error);
      Swal.fire("Error !!","Error in loading data",'error');

    }
    )
  }

  deleteBrand(bId:any){
    Swal.fire({
      icon:'info',
      title:"Are you sure?",
      confirmButtonText:'Delete',
      showCancelButton:true
    }).then((result)=>{
      if(result.isConfirmed){
        this._brand.deleteBrand(bId).subscribe(
          (data)=>{
            this.brands=this.brands.filter((brand:any)=>brand.bid!=bId)
           Swal.fire('Success','Brand deleted','success')
          },
          (error)=>{
           Swal.fire('Error','Error in deleting brand ','error')
          }
         )
      }
    })
  }
}
