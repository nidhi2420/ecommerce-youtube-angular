import { Component, OnInit } from '@angular/core';
import { gounsPage1 } from 'src/Data/Gouns/gounPage1';
import { menJeans } from 'src/Data/Men/men_jeans';
import { mens_kurta } from 'src/Data/Men/men_kurta';
import { lenghaCholiPage2 } from 'src/Data/Women/lenghaCholiPage2';
import { mensShoesPage1 } from 'src/Data/shoes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
  menJeans:any
  womenGouns:any
  lenghaCholi:any
  mensKurta:any
  mensShoes:any
ngOnInit(): void {
  this.menJeans= menJeans.slice(0,5)
  this.womenGouns=gounsPage1.slice(0,5)
  this.mensKurta = mens_kurta.slice(0,5)
  this.lenghaCholi = lenghaCholiPage2.slice(0,5)
  this.mensShoes =mensShoesPage1.slice(0,5)
}

}
