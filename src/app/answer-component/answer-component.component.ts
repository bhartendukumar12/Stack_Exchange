import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-component',
  templateUrl: './answer-component.component.html',
  styleUrls: ['./answer-component.component.scss']
})
export class AnswerComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log("answer loaded")
  }

}
