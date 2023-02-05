import { Component } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
  
  constructor() {
  }
  

}

/* $.get( "https://localhost:7228/api/Products/Test1", data => {
  console.log("success : ",data);
}); */
//$(document).ready(() => alert("jquery test"));
