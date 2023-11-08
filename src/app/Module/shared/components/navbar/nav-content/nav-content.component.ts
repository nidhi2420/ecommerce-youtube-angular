import { Component,Input, OnInit } from '@angular/core';
import { navigation } from './nav-content';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss']
})
export class NavContentComponent implements OnInit {
category:any
@Input()
selectedSection!: string;

 ngOnInit(){
  this.category=navigation;
  console.log(this.selectedSection);
 }
}
