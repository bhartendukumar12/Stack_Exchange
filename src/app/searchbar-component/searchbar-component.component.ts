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
  searchResults:any=[];
  lastFiveResults:any=[];
  isQuestionsLoaded:boolean=true;
  answerResults:any=[];
  isSearchResultAvlbl:boolean=true;

  constructor(private commonService : commonService ,  private spinnerService: NgxSpinnerService,  ) { }

  ngOnInit() {

  }

  getResult(){
    this.spinnerService.show();
    this.searchResults=[];
    this.isQuestionsLoaded=true;
    this.commonService.getStoQuestions(this.userInput).subscribe(response => {
      this.spinnerService.hide();
      if (response) {
        this.searchResults=response.items
        if( this.searchResults.length>0){
          this.isSearchResultAvlbl=true;
        }else{
          this.isSearchResultAvlbl=false;
        }
        this.lastFiveResults.push({title:this.userInput,result: this.searchResults})
        if(this.lastFiveResults.length==5){
          this.lastFiveResults.splice(0,1)
        }
      }else{
        this.isSearchResultAvlbl=false;
        this.searchResults=[]
      }
    },
      error => {
        this.isSearchResultAvlbl=false;
        this.spinnerService.hide();
        this.searchResults=[]
        console.log(error)
      })
  }

  reacentSearchMethod(element){
    this.isQuestionsLoaded=true;
    this.userInput=element.title
    this.searchResults=element.result
    if( this.searchResults.length>0){
      this.isSearchResultAvlbl=true;
    }else{
      this.isSearchResultAvlbl=false;
    }
  }

  navigateToAnswer(questionId){
    this.spinnerService.show();
   this.isQuestionsLoaded=false;
    this.commonService.getStoAnswers(questionId.question_id).subscribe(response => {
      this.spinnerService.hide();
      this.answerResults=response.items[0]
      if(this.answerResults.answers && this.answerResults.answers.length>0){
        this.isSearchResultAvlbl=true;
      }else{
        this.isSearchResultAvlbl=false;
      }
    },
      error => {
        this.isSearchResultAvlbl=false;
        this.spinnerService.hide();
        this.searchResults=[]
        console.log(error)
      })

  }

}
