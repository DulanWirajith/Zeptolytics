import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor(private http: HttpClient) {}

  get_sbl_data(): Observable<any> {
    return this.http.get('http://localhost:3000/api/get_dummy_data_sbl');
  }

  get_msg_data(): Observable<any> {
    return this.http.get('http://localhost:3000/api/get_dummy_data_msg');
  }
  get_asbg_data(): Observable<any> {
    return this.http.get('http://localhost:3000/api/get_dummy_data_asbg');
  }
  get_ms_data(): Observable<any> {
    return this.http.get('http://localhost:3000/api/get_dummy_data_ms');
  }
}
