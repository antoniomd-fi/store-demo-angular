import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  articles : any

  constructor (private articlesService: ArticlesService){}

  ngOnInit(){
    this.articles = this.articlesService.getArticles()
  }
}
