import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit {


  constructor(private alertify: AlertifyService, spinner: NgxSpinnerService) {
    super(spinner)
   }

  ngOnInit(): void {
    //this.showSpinner(SpinnerType.BallZigZagDeflect)
  }

  m() {
    this.alertify.message("deneme", { 
      messageType: MessageType.Success, 
      position: Position.BottomRight,
      delay: 5,
    });
  }
  n() {
    this.alertify.dismiss();
  }


}