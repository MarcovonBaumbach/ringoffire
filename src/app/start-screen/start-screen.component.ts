import { Component } from '@angular/core';
import { addDoc, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { collection } from '@firebase/firestore';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {
  game: Game;

  constructor(
    private firestore: Firestore,
    private router: Router) {}

  newGame() {
    this.game = new Game;

    const coll = collection(this.firestore, 'games');
    addDoc(coll, this.game.toJson()).then((gameInfo) => {
      console.log('Game changed', gameInfo);
      this.router.navigateByUrl(`/game/${gameInfo.id}`);
    });
  }
}
