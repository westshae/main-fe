import { Component, OnInit } from '@angular/core';
import axios from 'axios';

interface formattedRepo{
  id:string,
  name:string,
  fullname:string,
  description:string,
  url:string,
  language:string,
  archived:boolean,
  updatedAt:string,  
  updatedAtFormatted:string,
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent implements OnInit {
  repos: Array<formattedRepo> = [];

  ngOnInit(){
    this.getRepos();
  }

  async getRepos() {
    this.repos = await (await axios.get("http://localhost:5000/portfolio/preview")).data;
  }
}
