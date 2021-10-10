import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Simon Kairu', 'Muhammad Ali', 'If you even dream of beating me youd better wake up and apologize.', new Date(2021, 9, 10)),
    new Quote(2, 'Simon Kairu', 'Abraham Lincoln', "My Best Friend is a person who will give me a book I have not read", new Date(2021, 9, 10)),
    new Quote(3, 'Simon Kairu', 'Billy Graham', 'Courage is contagious. When a brave man takes a stand, the spines of others are often stiffened', new Date(2021, 9, 10)),
  ];


  addNewQuote(quote: any) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.dateCreated = new Date();
    this.quotes.push(quote);

  }
  deleteQuote(isComplete: boolean, index: number) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  toogleDetails(index: number) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete: boolean, index:number) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
