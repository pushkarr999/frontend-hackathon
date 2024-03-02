import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private apiUrl = 'http://192.168.1.35:3000/api/';

  constructor(private http: HttpClient) {}

  getDropdownOptions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'macIds');
  }

  getFault(data:any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'data?macId=' + data.macId + '&sTime=' + data.start + '&eTime=' + data.end)
  }

  p5(data:any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'que?macId=' + data.macId + '&sTime=' + data.start + '&eTime=' + data.end)
  }
}
