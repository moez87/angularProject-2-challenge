import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  cantactsService: any;

  constructor(private cantactsService: cantacsService) { }

  ngOnInit(): void {
    this.cantactsService.getAllProduct().subscribe((response) => {
      this.cantacts=response;
   },
     (error) => {
       console.log(error);
     });
 }
 deleteProduct(id){
   this.cantactsService.deleteProductById(id).subscribe((response)=>{
     this.ngOnInit();
     
   },(error)=>{
console.log(error);

   });


 
  }

}
