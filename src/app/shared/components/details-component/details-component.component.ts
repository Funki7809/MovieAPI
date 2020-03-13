import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoviesService } from "../../services/movies.service";
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['../../../../assets/css/style.css','../../../../assets/css/rating.css']
})
export class DetailsComponentComponent implements OnInit {
  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  
  movies$: Observable<any>;
  recomendated$: Observable<any>;
  video$:Observable<any>;
  constructor(private MoviesService:MoviesService,
    private activatedRouter:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(params=>{
      if(params.has('id')){
        this.movies$ = this.MoviesService.getOne(Number(params.get('id')));
        this.recomendated$ = this.MoviesService.getSimilar(Number(params.get('id')));
        this.video$ = this.MoviesService.getMovies(Number(params.get('id')));
      }
    })
  }
  home(){
    this.router.navigate(['']);
  }
  onClick(rating: number): void {
    this.rating = rating;
    this.MoviesService.getSession().subscribe(res=>{
      this.sendRating(res.guest_session_id)
    })
    
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
  }
  sendRating(sessionid:string){
    this.activatedRouter.paramMap.subscribe(params=>{
      if(params.has('id')){
        this.MoviesService.ratingMovie(Number(params.get('id')),this.rating,sessionid);
      }
    })
  }
 
}
