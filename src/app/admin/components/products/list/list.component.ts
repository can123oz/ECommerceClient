import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: any[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.get().subscribe(res => {
      this.products = res;
      console.log(res);
    });
    console.log(this.products);
  }


}