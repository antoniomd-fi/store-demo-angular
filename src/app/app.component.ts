import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  art={
    code:0,
    description:"",
    price:0
  }

  articles = [
    {code:1, description:'potatoes',price:10.55},
    {code:2, description:'apples',price:12.10},
    {code:3, description:'melon',price:52.30},
    {code:4, description:'onions',price:17},
    {code:5, description:'pumpkin',price:20},
  ]

  existRegisters(){
    return this.articles.length > 0
  }

  delete(code:number){
    for(let i = 0; i < this.articles.length; i++){
      if (this.articles[i].code == code ){
        this.articles.splice(i,1)
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
        this.articles[i].price = this.art.price
        return
      }
    }
    alert ("the typed product doesn't exist on database")
  }
}
