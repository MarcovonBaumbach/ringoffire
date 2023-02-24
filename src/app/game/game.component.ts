import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { Firestore, collectionData, addDoc, doc, setDoc, collection, getDoc, docData, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PlayerMissingDialogComponent } from '../player-missing-dialog/player-missing-dialog.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game: Game;
  game$: Observable<any>;
  gameId: any;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private firestore: Firestore) {
  }

  ngOnInit() {
    this.newGame();
    this.route.params.subscribe((params) => {
      //console.log(params['id']);

      this.gameId = doc(this.firestore, `games/${params['id']}`);
      //const coll = collection(this.firestore, 'games');
      this.game$ = docData(this.gameId, { idField: 'id' });;
      this.game$.subscribe((game) => {
        console.log('current game', game);
        this.game.currentPlayer = game.currentPlayer;
        this.game.playedCards = game.playedCards;
        this.game.players = game.players;
        this.game.stack = game.stack;
        this.game.pickCardAnimation = game.pickCardAnimation;
        this.game.currentCard = game.currentCard;
      });
    })
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    if (!this.game.pickCardAnimation) {
      if (this.game.players.length > 0) {
        this.game.currentCard = this.game.stack.pop();

        this.game.pickCardAnimation = true;
        this.game.playedCards.push(this.game.currentCard);
        console.log(this.game);

        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;

        setTimeout(() => {
          this.game.pickCardAnimation = false;
          this.saveGame();
        }, 1500);
      }
      else this.dialog.open(PlayerMissingDialogComponent);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
    dialogRef.afterClosed().subscribe((name: string) => {
      if (name) {
        this.game.players.push(name);
        this.saveGame();
      }
    });
  }

  saveGame() {
    //this.gameId.update(this.game.toJson());
    updateDoc(this.gameId, this.game.toJson());
  }
}
