import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import Proxy  from '../helpers/proxy';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  API_URI = Proxy.movies.url; 
  API_URI_ONE = Proxy.oneMovie.url;
  API_URI_KEY = Proxy.movieKey.url;
  API_URI_SIMILAR = Proxy.similar.url;
  SEARCH = Proxy.search.url;
  SESION = Proxy.invitadoSesion.url;
  VIDEO = Proxy.getTrailer.url;
 
  getMovies(id:number):Observable<any>{
    return this.http.get<any>(this.API_URI+id);
  }
  getOne(id:number):Observable<any>{
    return this.http.get<any>(this.API_URI_ONE+id+this.API_URI_KEY);
  }
  getSimilar(id:number):Observable<any>{
    return this.http.get<any>(this.API_URI_ONE+id+this.API_URI_SIMILAR);
  }
  searchMovie(data:string):Observable<any>{
    return this.http.get<any>(this.SEARCH+data);
  }
  ratingMovie(id:number,value:number,sesion:string){
    var  postData = {value:value}
     return this.http.post('https://api.themoviedb.org/3/movie/'+id+'/rating'+'?api_key=d25eb09a98a57d37b39bb4e508b67599'+'&guest_session_id='+sesion,postData); 
  }
  getSession():Observable<any>{
    return this.http.get<any>(this.SESION);
  }
  getVideo(id:number):Observable<any>{
    return this.http.get<any>(this.API_URI_ONE+id+this.VIDEO);
  }
}
