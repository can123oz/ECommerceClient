import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl: string) { }

  url(requestParameters: Partial<RequestParameters>): string {
    return `${requestParameters.baseUrl ? requestParameters.baseUrl : this.baseUrl}/${requestParameters.controllers}${requestParameters.action ? `/${requestParameters.action}` : ""}`;
  }

  get<T>(requestParameters: Partial<RequestParameters>, id?: string): Observable<T> {
    let url: string = "";
    requestParameters.fullEndPoint ? url = requestParameters.fullEndPoint : url = `${this.url(requestParameters)}${id ? `/${id}` : ""}`;
    console.log(url);
    return this.httpClient.get<T>(url, { headers: requestParameters.header });
  }

  post<T>(requestParameters: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = "";
    requestParameters.fullEndPoint ? url = requestParameters.fullEndPoint : url = this.url(requestParameters);
    return this.httpClient.post<T>(url, body, { headers: requestParameters.header });
  }

  put<T>(requestParameters: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = "";
    requestParameters.fullEndPoint ? url = requestParameters.fullEndPoint : url = this.url(requestParameters);
    return this.httpClient.put<T>(url, body, { headers: requestParameters.header });
  }

  delete<T>(requestParameters: Partial<RequestParameters>, id: string): Observable<T> {
    let url: string = "";
    requestParameters.fullEndPoint ? url = requestParameters.fullEndPoint : url = `${this.url(requestParameters)}/${id}`;
    return this.httpClient.delete<T>(url, { headers: requestParameters.header });
  }

}

export class RequestParameters {
  controllers?: string;
  action?: string;

  header?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
}