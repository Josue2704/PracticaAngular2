import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://104.236.201.39:9090/customers';

  constructor(private http: HttpClient) {}

  getCustomer(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
