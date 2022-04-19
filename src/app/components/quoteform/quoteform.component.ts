import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from 'src/app/model/quote';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {

  quoteQuote!: string;
  quoteAuthor!: string;
  quotePublisher!: string;
  newQuote:any;
  

  // myForm = new FormGroup ({})

  // newQuote = new Quote (0,"","","",0, new Date())

  @Output() addQuote = new EventEmitter<Quote>()
  
  submitQuote(){
    this.newQuote =new Quote (0,this.quoteQuote,this.quoteAuthor,this.quotePublisher,0, new Date())
    this.addQuote.emit(this.newQuote);
    // this.myForm.reset()
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
