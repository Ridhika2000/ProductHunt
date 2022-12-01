import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
brands:any;
  constructor(
    private _brand:BrandService,
    private _snack:MatSnackBar
  ) { }

  ngOnInit(): void {
    this._brand.brands().subscribe(
      (data:any)=>{
        this.brands=data
      },
      (error)=>{
        this._snack.open("Error in loading brands from server",'',{
          duration:3000,
        })
      }
    )
  }

}
