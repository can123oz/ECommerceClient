import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { async } from 'rxjs';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { CreateProduct } from 'src/app/contracts/create_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit {


  constructor(private productService: ProductService, spinner: NgxSpinnerService,
    private alertify: AlertifyService) {
    super(spinner);
  }

  ngOnInit(): void {
  }

  create(name: HTMLInputElement, price: HTMLInputElement, stock: HTMLInputElement) {
    //this.spinner.show(SpinnerType.BallZigZagDeflect);
    //this.alertify.message("Product Add proces started", { position:Position.BottomRight,messageType:MessageType.Message})
    const createProduct: CreateProduct = new CreateProduct();
    createProduct.name = name.value;
    createProduct.stock = parseInt(stock.value);
    createProduct.price = parseFloat(price.value);
    this.productService.create(createProduct,
      () => {
        this.alertify.message("Successful",
          { messageType: MessageType.Success, position: Position.BottomRight })
      },
      (err:string) => {
        this.alertify.message(err,{messageType: MessageType.Error, position: Position.BottomRight});
      });
  }

}