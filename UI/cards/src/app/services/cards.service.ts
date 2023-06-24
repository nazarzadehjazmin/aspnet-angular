import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  baseUrl: string = 'https://localhost:7052/api/Cards'

  constructor(private http : HttpClient) { }

  // GetAllCards
  //match with the endpoint of GetAllCards
  getAllCards(): Observable<Card[]>
  {
    return this.http.get<Card[]>(this.baseUrl);
  }
}
