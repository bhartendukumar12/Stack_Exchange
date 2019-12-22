import { Component, OnInit } from '@angular/core';
import {commonService} from '../common-service';
import { NgxSpinnerService } from 'ngx-spinner';

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
  constructor(private commonService : commonService ,  private spinnerService: NgxSpinnerService,  ) { }

  ngOnInit() {

  }

  getResult(){
    this.spinnerService.show();
    this.searchResults=null;
    this.isQuestionsLoaded=true;
    this.commonService.getStoQuestions(this.userInput).subscribe(response => {
      this.spinnerService.hide();
      if (response) {
        this.searchResults=response.items
        this.lastFiveResults.push({title:this.userInput,result: this.searchResults})
        if(this.lastFiveResults.length==5){
          this.lastFiveResults.splice(0,1)
        }
      }else{
        this.searchResults=[]
      }
    },
      error => {
        this.spinnerService.hide();
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
    this.spinnerService.show();
   this.isQuestionsLoaded=false;
    this.commonService.getStoAnswers(questionId.question_id).subscribe(response => {
      this.spinnerService.hide();
      console.log("response",response)
      this.answerResults=response.items[0]
      console.log("answerResults",this.answerResults)
    },
      error => {
        this.spinnerService.hide();
        this.searchResults=[]
        console.log(error)
      })

  }

}
