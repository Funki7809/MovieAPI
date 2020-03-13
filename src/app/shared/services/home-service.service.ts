import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import Proxy  from '../helpers/proxy';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  constructor(private http: HttpClient) { }
  API_URI = Proxy.genres.url;  
  
  contact: Array<Object>;
  getGeneres(): Observable<any> {
    return this.http.get<any>(this.API_URI);
  }
}
