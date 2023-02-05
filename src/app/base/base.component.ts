import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


export class BaseComponent {

  constructor(private spinner: NgxSpinnerService) {}

  showSpinner(spinnerType: SpinnerType) {
    this.spinner.show(spinnerType);
    console.log(spinnerType);
    setTimeout(() => this.hideSpinner(spinnerType), 3000);
  }
  
  hideSpinner(spinnerType: SpinnerType) {
    this.spinner.hide(spinnerType);
  }
}

export enum SpinnerType {
  BallScaleMultiple = "s1",
  BallClipRotatePulse = "s2",
  BallZigZagDeflect = "s3"
}