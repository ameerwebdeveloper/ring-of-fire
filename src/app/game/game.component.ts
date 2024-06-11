import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { RouterModule, Router } from '@angular/router';

import { Game } from '../models/game';
import { PlayerComponent } from '../player/player.component';
import { GameInfoComponent } from '../game-info/game-info.component';
import { AddPlayerDialogComponent } from '../add-player-dialog/add-player-dialog.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    PlayerComponent,
    GameInfoComponent,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatSidenavModule
  ],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  randomNumbers: number[] = [];
  game: Game = new Game();

  constructor(public dialog: MatDialog,private router: Router) {}

  ngOnInit(): void {
    this.setRandomNumbers();
  }

  takeCard() {
    if (this.canPlay()) {
      let lastCard = this.game.stack.pop();
      if (lastCard) {
        this.currentCard = lastCard;
      }
      this.pickCardAnimation = true;
      this.changePlayer();
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1500);
    }
  }

  canPlay() {
    if (!this.pickCardAnimation && this.game.players.length > 0) {
      return true;
    } else {
      if (this.game.players.length === 0) {
        console.error('No players found');
      }
      return false;
    }
  }

  changePlayer() {
    this.game.currentPlayer = (this.game.currentPlayer + 1) % this.game.players.length;
  }

  newGame() {
    this.game = new Game();
    console.log('New game created');
    console.log(this.game);
  }

  MyshowCard() {
    const gameField = document.getElementById('game-field');
    if (gameField) {
      gameField.innerHTML = '';
      for (let i = 0; i < this.game.stack.length; i++) {
        gameField.innerHTML += `<img src="/assets/cards/${this.game.stack[i]}.png">`;
      }
    } else {
      console.error('Game field element not found');
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPlayerDialogComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
      }
    });
  }

  getRandomImageIndex(): number {
    return Math.floor(Math.random() * 144) + 1;
  }

  setRandomNumbers() {
    this.randomNumbers = [];
    for (let i = 0; i < 144; i++) {
      this.randomNumbers.push(this.getRandomImageIndex());
    }
  }

  backToStartPage(){
    this.router.navigate(['/']);
  }
}
