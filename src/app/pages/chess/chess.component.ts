import { Component } from '@angular/core';

enum PieceEnum {
  Empty = 0,
  Pawn = 1,
  Knight = 2,
  Bishop = 3,
  Rook = 4,
  Queen = 5,
  King = 6,
}

enum DefaultPositions {
  traditional = 0,
}

type Piece = {
  type: PieceEnum,
  isWhite : boolean,
  isEmpty : boolean,
  x:number,
  y:number,
  hasMoved:boolean,
}

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.less'],
})
export class ChessComponent {
  grid: Piece[][] = [][0];
  rowLength = 8;
  columnLength = 8;
  defaultPosition = DefaultPositions.traditional;

  isWhiteTurn = true;
  emptyPiece = {type:PieceEnum.Empty, isWhite:true, isEmpty:true, x:-1, y:-1,hasMoved:false};
  selectedPiece: Piece = this.emptyPiece;

  ngOnInit() {
    this.initPieces();
  }

  initPieces() {
    this.grid = new Array(this.rowLength).fill(this.emptyPiece).map(() => new Array(this.columnLength).fill(this.emptyPiece));
    switch(this.defaultPosition){
      case DefaultPositions.traditional:
        this.initRow(0, [4,2,3,5,6,3,2,4], false)
        this.initRow(1, [1,1,1,1,1,1,1,1], false)

        this.initRow(6, [1,1,1,1,1,1,1,1], true)
        this.initRow(7, [4,2,3,5,6,3,2,4], true)
    }
  }

  initRow(x:number, row:PieceEnum[], isWhite:boolean){
    for(let y = 0; y< this.rowLength; y++){
      this.grid[x][y] = this.makePiece(row[y], isWhite,x,y);
    }
  }

  initSquare(x: number, y: number, piece: PieceEnum, isWhite:boolean) {
    this.grid[x][y] = this.makePiece(piece, isWhite,x,y);
  }

  makePiece(type : PieceEnum, isWhite: boolean, x:number, y:number){
    let piece : Piece = {type:type, isWhite:isWhite, isEmpty:type == PieceEnum.Empty, x:x, y:y, hasMoved:false};
    return piece;
  }

  getDisplayText(x:number,y:number){
    const piece = this.grid[x][y];
    if(piece.isEmpty) return "";
    let text = "";
    text += piece.isWhite ? "W " : "B ";
    switch(piece.type){
      default: case PieceEnum.Empty: return "";
      case PieceEnum.Pawn: text+= "Pa";break;
      case PieceEnum.Knight: text+= "Kn";break;
      case PieceEnum.Bishop: text+= "Bi";break;
      case PieceEnum.Rook: text+= "Ro";break;
      case PieceEnum.Queen: text+= "Qu";break;
      case PieceEnum.King: text+= "Ki";break;
    }
    return text;
  }

  shouldSetDark(x: number, y: number) {
    let oddRow = x % 2 == 0;
    let oddColumn = y % 2 == 0;
    return oddRow != oddColumn;
  }

  squareIsEmpty(x:number, y:number){
    return this.grid[x][y].isEmpty;
  }

  getPiece(x: number, y:number){
    return this.grid[x][y];
  }

  validateMovement(x:number, y:number, x2:number, y2:number){
    switch(this.selectedPiece.type){
      case PieceEnum.Pawn:
        
    }
  }

  validateAttack(x:number, y:number, x2:number, y2:number){

  }


  movePiece(x:number, y:number, x2:number, y2:number){
    this.validateMovement(x,y,x2,y2);
    this.grid[x2][y2] = this.selectedPiece;
    this.grid[x][y] = this.emptyPiece;

    this.selectedPiece.hasMoved = true;
    this.selectedPiece = this.emptyPiece;
    this.isWhiteTurn = !this.isWhiteTurn;
  }

  attackPiece(x:number, y:number, x2:number, y2:number){
    this.validateAttack(x,y,x2,y2);
    console.log(this.grid[x2][y2])
    console.log(this.grid[x][y])

    this.grid[x2][y2] = this.selectedPiece;
    this.grid[x][y] = this.emptyPiece;

    console.log(this.grid[x2][y2])
    console.log(this.grid[x][y])

    this.selectedPiece.hasMoved = true;

    this.selectedPiece = this.emptyPiece;
    this.isWhiteTurn = !this.isWhiteTurn;
  }

  correctTurn(piece:Piece){
    if(piece.isEmpty)return;
    if(piece.isWhite && this.isWhiteTurn)return true;
    if(!piece.isWhite && !this.isWhiteTurn)return true;
    return false;
  }

  areSameTeam(piece:Piece){
    return piece.isWhite == this.selectedPiece.isWhite;
  }

  handleClick(x: number, y: number){
    const piece = this.getPiece(x,y);

    const shouldSelectPiece = 
      this.correctTurn(piece)
      && this.selectedPiece.isEmpty 
      && !this.squareIsEmpty(x,y);

    const shouldAttackPiece = 
      this.correctTurn(this.selectedPiece) 
      && !this.areSameTeam(piece)
      && !this.selectedPiece.isEmpty 
      && !this.squareIsEmpty(x,y);

    const shouldMovePiece = 
      this.correctTurn(this.selectedPiece) 
      && !this.selectedPiece.isEmpty 
      && this.squareIsEmpty(x,y);

    if(shouldSelectPiece){
      console.log('select');
      this.selectedPiece = piece;
      return;
    }
    else if(shouldAttackPiece){    
      console.log('attack')
      this.attackPiece(x,y,piece.x,piece.y);
      return;
    }
    else if(shouldMovePiece){
      console.log('move')
      this.movePiece(this.selectedPiece.x,this.selectedPiece.y,x,y);
      return;
    }      
    console.log('none');

  }
}
