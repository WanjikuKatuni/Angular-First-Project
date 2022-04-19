
import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/model/quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {
  bestvote:number = 0;
  bestquote:number=0;
  
  quotes:Quote[]=[
    new Quote (0,"once bitten twice shy","eric","ann",3,new Date(2022,4,19))
  ]
  addNewQuote(quote:any){
    let quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    quote.dateCreated = new Date(quote.dateCreated)
    this.quotes.push(quote)

  }
  upvote(index:number){
    this.quotes[index].voteCount+=1
  }
  downvote(index:number){
    this.quotes[index].voteCount-=1
  }
 

  calculatebestvote() {
    for(let i=0;i<this.quotes.length;i++){
      if(this.quotes[i].voteCount>this.bestvote){
        this.bestvote=this.quotes[i].voteCount
        this.bestquote=i
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
