import { Component, OnInit } from '@angular/core';
import {commonService} from '../common-service';

@Component({
  selector: 'app-searchbar-component',
  templateUrl: './searchbar-component.component.html',
  styleUrls: ['./searchbar-component.component.scss']
})

export class SearchbarComponentComponent implements OnInit {

  userInput:any;
  searchResults:any;
  lastFiveResults:any=[];
  isQuestionsLoaded:boolean=true;
  answerResults:any=[];
  constructor(private commonService : commonService  ) { }

  ngOnInit() {

  }

  getResult(){
    this.searchResults=null;
    this.isQuestionsLoaded=true;
    this.commonService.getStoQuestions(this.userInput).subscribe(response => {
      if (response) {
        this.searchResults=response.items
        this.lastFiveResults.push({title:this.userInput,result: this.searchResults})
        console.log("searchResults",this.searchResults)
        if(this.lastFiveResults.length==5){
          this.lastFiveResults.splice(0,1)
        }
      }else{
        this.searchResults=[]
      }
    },
      error => {
        this.searchResults=[]
        console.log(error)
      })
  }

  reacentSearchMethod(element){
    this.isQuestionsLoaded=true;
    this.userInput=element.title
    this.searchResults=element.result
  }

  navigateToAnswer(questionId){
   this.isQuestionsLoaded=false;
    this.commonService.getStoAnswers(questionId.question_id).subscribe(response => {
      console.log(response)
      this.answerResults=response.items[0]
    },
      error => {
        this.searchResults=[]
        console.log(error)
      })

  }

}
