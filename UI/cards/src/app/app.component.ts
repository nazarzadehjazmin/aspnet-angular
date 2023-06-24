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
  card: Card = {
    id: '',
    cardNumber: '',
    cardHolderName: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: ''
  }

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

  onSubmit() {

    if (this.card.id == '') {
      this.cardService.addCard(this.card).subscribe(
        response => {
          this.getAllCards();
          //clear form
          this.card = {
            id: '',
            cardNumber: '',
            cardHolderName: '',
            expiryMonth: '',
            expiryYear: '',
            cvc: ''
          };
        }
      );
    }
    this.updateCard(this.card);
  }

  deleteCard(id: string) {
    this.cardService.deleteCard(id)
      .subscribe(
        response => {
          this.getAllCards();
        }
      );
  }

  populateForm(card: Card): void {
    this.card = card;
  }

  updateCard(card: Card): void {
    this.cardService.updateCard(card)
      .subscribe(
        response => {
          this.getAllCards();
        }
      );
  }

}
