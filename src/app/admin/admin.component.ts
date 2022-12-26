import { Component, OnInit} from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  art={
    code:0,
    description:"",
    price:0
  }

  articles : any

  constructor (private articlesService: ArticlesService){}


  existRegisters(){
    return this.articles.length > 0
  }

  delete(code:number){
    for(let i = 0; i < this.articles.length; i++){
      if (this.articles[i].code == code ){
        this.articles.splice(i,1)
       // this.articlesService.articles.splice(i,1)
        return
      }
    }
  }

  add(){
    if (this.art.code == 0){
      alert("You must type a code diferent to 0")
      return
    }
    for (let i = 0; i < this.articles.length; i++){
      if (this.articles[i].code == this.art.code){
        alert('The database contains a item with the same code')
        return
      }
    }
    this.articles.push({code:this.art.code, description: this.art.description, price: this.art.price})
    //this.articlesService.articles.push({code:this.art.code, description: this.art.description, price: this.art.price})
    
    this.art.code = 0
    this.art.description =""
    this.art.price = 0
  }

  select(art: {code:number, description:string, price: number}){
    this.art.code = art.code
    this.art.description = art.description
    this.art.price = art.price
  }

  modify(){
    for (let i = 0 ; i < this.articles.length; i++){
      if (this.articles[i].code == this.art.code){
        this.articles[i].description = this.art.description
        //this.articlesService.articles[i].description = this.art.description
        this.articles[i].price = this.art.price
       // this.articlesService.articles[i].price = this.art.price

        return
      }
    }
    alert ("the typed product doesn't exist on database")
  }


  ngOnInit(){
    this.articles = this.articlesService.getArticles()
  }
}
