import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavContentComponent } from './components/navbar/nav-content/nav-content.component';
// import { StarRatingComponent } from './components/star-rating/star-rating.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavContentComponent,
    ProductCardComponent,
    // StarRatingComponent,
   
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    // StarRatingComponent
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
  
  ]
})
export class SharedModule { }
