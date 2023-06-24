import { Component, OnInit } from '@angular/core';
import { CardsService } from './services/cards.service';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cards';
  cards: Card[] = [];

  constructor(private cardService: CardsService) { }
  //use this card service when the page first time loads
  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards(): void {
    this.cardService.getAllCards()
      .subscribe(
        response => {
          this.cards = response;
        }
      );
  }

}
