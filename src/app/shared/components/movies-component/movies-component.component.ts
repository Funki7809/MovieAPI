import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../../services/movies.service";
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-movies-component',
  templateUrl: './movies-component.component.html',
  styleUrls: ['../../../../assets/css/style.css','../../../../assets/css/paginator.css']
})
export class MoviesComponentComponent implements OnInit {
  movies$: Observable<any>;
  p: number = 1;
  constructor(private MoviesService:MoviesService,
    private activateRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params=>{
      if(params.has('id')){
        this.movies$ = this.MoviesService.getMovies(Number(params.get('id')));
      }
    })
   }
  seeDetails(id:number){
    this.router.navigate(['/details',id]);
  }
  home(){
    this.router.navigate(['']);
  }
}


