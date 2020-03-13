import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from "../../services/home-service.service";
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { FormControl } from '@angular/forms';
import { MoviesService } from "../../services/movies.service";
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['../../../../assets/css/style.css']
})
export class HomeComponentComponent implements OnInit {
  genres$ : Observable<any>;
  search:string;
  serachControl=0;
  movies$:Observable<any>;
  constructor( private HomeService:HomeServiceService, 
    private moviesService:MoviesService,
    private router:Router) { }
  
  ngOnInit() {
    this.genres$ = this.HomeService.getGeneres();
  }
  seeMovies(id:number){
    this.router.navigate(['/movies',id]);
  }
  serachMovie(){
    if(this.search.length>0){
      this.serachControl=1;
      this.movies$=this.moviesService.searchMovie(this.search);
    }
    else{
      this.serachControl=0;
    }
  }
  seeDetails(id:number){
    this.router.navigate(['/details',id]);
  }
}
