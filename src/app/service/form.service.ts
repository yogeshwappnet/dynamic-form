import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FormService {
  constructor(private httpClient: HttpClient) { }

  getAllForms(): Observable<any> {
    return this.httpClient.get<any>(`${environment.prodUrl}`);
  }

  saveForm(body: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.prodUrl}`, body);
  }

  getForm(id) {
    return this.httpClient.get<any>(`${environment.prodUrl}${id}`);
  }

  updateForm(id,body: any){
    return this.httpClient.put<any>(`${environment.prodUrl}${id}`, body);
  }
}