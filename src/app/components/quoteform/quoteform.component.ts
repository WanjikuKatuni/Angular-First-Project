import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from 'src/app/model/quote';


@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {

  newQuote = new Quote (0,"","","",0, new Date())

  @Output() addQuote = new EventEmitter<Quote>()
  
  submitQuote(){
    this.addQuote.emit(this.newQuote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
