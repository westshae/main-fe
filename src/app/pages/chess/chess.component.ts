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
}

@Component({
  selector: 'app-blog',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.less'],
})
export class ChessComponent {
  grid: Piece[][] = [][0];
  rowLength = 8;
  columnLength = 8;
  defaultPosition = DefaultPositions.traditional;

  ngOnInit() {
    this.initPieces();
  }

  initPieces() {
    const emptyPiece = {type:PieceEnum.Empty, isWhite:true, isEmpty:true}
    this.grid = new Array(this.rowLength).fill(emptyPiece).map(() => new Array(this.columnLength).fill(emptyPiece));
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
      this.grid[x][y] = this.makePiece(row[y], isWhite);
    }
  }

  initSquare(x: number, y: number, piece: PieceEnum, isWhite:boolean) {
    this.grid[x][y] = this.makePiece(piece, isWhite);
  }

  makePiece(type : PieceEnum, isWhite: boolean){
    let piece : Piece = {type:type, isWhite:isWhite, isEmpty:type == PieceEnum.Empty};
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
}
