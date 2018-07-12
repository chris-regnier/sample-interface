import { Component, OnInit } from '@angular/core';

import * as LoremIpsum from "lorem-ipsum";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  LoremIpsum = LoremIpsum;
  title: string = '';
  content: string = '';
  constructor() { }

  ngOnInit() {
    this.title = this.getTitle();
    this.content = this.getContent();
  }

  getTitle(count?: number){
    let new_string = LoremIpsum();
    return new_string;
  }

  getContent(count?: number){
    count = (count == undefined) ? 4 : count;
    let new_string = LoremIpsum({
      count: count
      , units: 'sentences'
    })
    return new_string;
  }

}
