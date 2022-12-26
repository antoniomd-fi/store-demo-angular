import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(){}


  public  articles = [
    {code:1, description:'potatoes',price:10.55},
    {code:2, description:'apples',price:12.10},
    {code:3, description:'melon',price:52.30},
    {code:4, description:'onions',price:17},
    {code:5, description:'pumpkin',price:20},
  ]

   getArticles (){
    return this.articles;
  }
}
