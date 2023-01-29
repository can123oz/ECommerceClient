import { Component, OnInit } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from 'src/app/services/ui/custom-toastr.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  constructor(private toastr: CustomToastrService,private spinner: NgxSpinnerService) {

  }

  ngOnInit(): void {
    this.toastr.message("deneme", "deneme", { messageType: ToastrMessageType.Info, position: ToastrPosition.BottomRight });

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      //this.spinner.hide();
    }, 5000);
  }

}
