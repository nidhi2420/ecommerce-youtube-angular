import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-home-product-card',
  templateUrl: './home-product-card.component.html',
  styleUrls: ['./home-product-card.component.scss']
})
export class HomeProductCardComponent implements OnInit {
  @Input()product:any
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
