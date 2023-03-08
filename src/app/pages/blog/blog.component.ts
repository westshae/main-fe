import { Component, OnInit } from '@angular/core';
import axios from 'axios';
interface formattedCard{
  id:string,
  title:string,
  description:string,
  author:string,
  date:string,
}
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})



export class BlogComponent implements OnInit {
  cards: Array<formattedCard> = [];

  ngOnInit(){
    this.getCards();
  }

  async getCards() {
    this.cards = await (await axios.get(`http://localhost:5000/blog/posts`)).data;
  }
}
