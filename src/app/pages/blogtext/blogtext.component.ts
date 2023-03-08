import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
interface formattedCard{
  id:string,
  title:string,
  description:string,
  author:string,
  date:string,
}
interface formattedText{
  id:string,
  text:string,
}

@Component({
  selector: 'app-blogtext',
  templateUrl: './blogtext.component.html',
  styleUrls: ['./blogtext.component.less']
})
export class BlogTextComponent implements OnInit {
  public id: string | undefined;
  public textInfo: formattedCard | undefined;
  public text: formattedText | undefined;

  constructor(private route: ActivatedRoute, private router:Router) {}


  ngOnInit() {
    this.getIdFromUrl();
    this.getTextInfo();
    this.getText();
  }

  getIdFromUrl(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id == null) this.router.navigate(['/blog']);
    else this.id = id;
  }

  async getTextInfo(){
    this.textInfo = await (await axios
      .get("http://localhost:5000/blog/card", {
        params: {
          id: this.id,
        },
      })).data;
  }

  async getText(){
    this.text = await (await axios
      .get("http://localhost:5000/blog/blog", {
        params: {
          id: this.id,
        },
      })).data;
  }
}