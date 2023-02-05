import { Component, OnInit } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from 'src/app/services/ui/custom-toastr.service';
import { NgxSpinnerService } from "ngx-spinner";
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { Product } from 'src/app/contracts/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService, private toastr: CustomToastrService,
    private httpClientService: HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {
    //this.toastr.message("deneme", "deneme", { messageType: ToastrMessageType.Info, position: ToastrPosition.BottomRight });
    //this.showSpinner(SpinnerType.BallScaleMultiple);
    this.httpClientService.get<Product[]>({controllers: "products"}).subscribe(res => res.forEach(item => console.log(item.name)));
    //this.httpClientService.get({controllers: "products"},"26530898-ce7b-4721-aaef-5afd0a58201d").subscribe(res => console.log(res));
    //this.httpClientService.post({controllers: "products"},{ name: "deneme 123", stock: 123, price: 1}).subscribe();
    //this.httpClientService.put({controllers: "products"},{ id:"a768e6d3-286b-46b9-bfe7-617bf737b360",name: "deneme put", stock: 111, price: 1}).subscribe();
    //this.httpClientService.delete({controllers:"products"},"be59a7ca-9f75-4255-843f-ce2d3c2303a3").subscribe();
    /* this.httpClientService.get({baseUrl:"https://jsonplaceholder.typicode.com",controllers:"posts"}).subscribe(res => {
      console.log(res);
    }); */

  }

}
