import { Component } from '@angular/core';
import { lenghaCholiPage2 } from 'src/Data/Women/lenghaCholiPage2';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  selectedSize:any
  relatedProducts:any
  reviews =[1,1,1,1,1]
  ngOnInit(){
    this.relatedProducts =lenghaCholiPage2;
  }
  handleAddToCart(){
    console.log("selected size",this.selectedSize);
  }
}
