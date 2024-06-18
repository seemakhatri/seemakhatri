import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InquiriesService {

  private apiUrl = "https://sk-backend-h2fw.onrender.com";

  constructor(private http: HttpClient) {}

  sendInquiry(inquiry: any) {
    return this.http.post(`${this.apiUrl}/api/inquiries`, inquiry);
  }


}
