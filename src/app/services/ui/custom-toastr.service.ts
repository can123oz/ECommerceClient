import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) { }


  message(message: string, title: string, toastrOptins: Partial<ToastrOptions>) {
    this.toastr[toastrOptins.messageType](message, title, { positionClass: toastrOptins.position });
  }

}

export class ToastrOptions {
  messageType: ToastrMessageType
  position: ToastrPosition
}

export enum ToastrMessageType {
  Success = "success",
  Error = "error",
  Info = "info",
  Warning = "warning"
}

export enum ToastrPosition {
  TopRight = "toast-top-right",
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  TopLeft = "toast-top-left",
  TopFullWidth = "toast-top-right",
  BottomFullWidth = "toast-bottom-",
  TopCenter = "toast-top-center",
  BottomCenter = "toast-bottom-center"
} 