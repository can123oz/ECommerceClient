import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateProduct } from 'src/app/contracts/create_product';
import { HttpClientService, RequestParameters } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClientService) { }

  create(product: CreateProduct, successCallBack?: any, errorCallBack?: any) {
    return this.httpClient.post({ controllers: "products" }, product)
      .subscribe(result => {
        successCallBack();
        console.log(result);
      }, (error: HttpErrorResponse) => {
        //console.log(error.error);
        const _error: ErrorResponse[] = error.error;
        _error.forEach((e, index) => {
          //console.log("e : ",e);
          e.value.forEach(_e => {
            //console.log("_e : ", _e);
            errorCallBack(_e);
          });
        });
        //debugger
      });
  }

  update() {

  }

  get(): Observable<any[]> {
    return this.httpClient.get({ controllers: "products" });
  }
}

export class ErrorResponse {
  key: string;
  value: string[];
}