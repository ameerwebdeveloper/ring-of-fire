import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent {
  title = '';
  description = '';
  @Input() cardName: string = '';

  cardAction = [
    {
        title: 'Willkommen!',
        description: 'starte das Spiel und ziehe eine Karte!'
    },
   {
       title: 'Wasserfall',
       description: 'Alle müssen gleichzeitig trinken. Sobald Spieler 1 aufhört zu trinken, hört der nächste Spieler auf zu trinken und so weiter.'
   },
   {
       title: 'Du',
       description: 'Du entscheidest, wer trinkt.'
   },
   {
       title: 'Ich',
       description: 'Herzlichen Glückwunsch! Trink einen Shot!'
   },
   {
       title: 'Kategorie',
       description: 'Komm mit einer Kategorie (z.B. Farben). Jeder Spieler muss ein Element aus der Kategorie aufzählen.'
   },
   {
       title: 'Tanz ein Jive',
       description: 'Spieler 1 macht einen Tanzmove. Spieler 2 wiederholt den Tanzmove und fügt einen zweiten hinzu.'
   },
   {
       title: 'Mädels',
       description: 'Alle Mädchen trinken.'
   },
   {
       title: 'Himmel',
       description: 'Hände hoch! Der letzte Spieler trinkt!'
   },
   {
       title: 'Partner',
       description: 'Wähle einen Partner. Dein Partner muss immer trinken, wenn du trinkst, und umgekehrt.'
   },
   {
       title: 'Daumenmeister',
       description: 'Wähle einen Partner. Dein Partner muss immer trinken, wenn du trinkst, und umgekehrt.'
   },
   {
       title: 'Männer',
       description: 'Alle Männer trinken.'
   },
   {
       title: 'Quizmaster',
       description: 'Sage etwas, das du noch nie getan hast. Jeder, der es getan hat, muss trinken'
   },
   {
       title: 'Ich habe noch nie',
       description: 'Sage etwas, das du noch nie getan hast. Jeder, der es getan hat, muss trinken.'
   },
   {
       title: 'Regel',
       description: 'Mache eine Regel. Jeder muss trinken, wenn er die Regel bricht.'
   }
];

constructor() { 
    
}

ngOnChanges() {
    let ruleNumber = +this.cardName.split('_')[1];
    if(!ruleNumber) {
        ruleNumber=0;
    }
    
    this.title = this.cardAction[ruleNumber].title;
    this.description = this.cardAction[ruleNumber].description;
}


}