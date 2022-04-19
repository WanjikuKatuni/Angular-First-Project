import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { QuoteformComponent } from './components/quoteform/quoteform.component';
import { QuotedetailsComponent } from './components/quotedetails/quotedetails.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DateCountPipe } from './pipes/date-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteformComponent,
    QuotedetailsComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
