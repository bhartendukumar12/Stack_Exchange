import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { commonService } from 'src/app/common-service';


@Component({
  selector: 'app-answer-component',
  templateUrl: './answer-component.component.html',
  styleUrls: ['./answer-component.component.scss']
})
export class AnswerComponentComponent implements OnInit {

  isQuestionsLoaded:boolean=true;
  answerResults:any=[];
  isSearchResultAvlbl:boolean=true;
  searchResults:any=[];

  getStoAnswersSub: Subscription;

  constructor(private commonService : commonService ,  private route: ActivatedRoute,  private spinnerService: NgxSpinnerService,  ) { }

  ngOnInit() {
    let answerId = this.route.snapshot.queryParams.id;
    this.navigateToAnswer(answerId)
  
  }

  
  navigateToAnswer(answerId){
    this.spinnerService.show();
    this.isQuestionsLoaded=false;
    this.commonService.getStoAnswers(answerId).subscribe(response => {
      this.spinnerService.hide();
      this.answerResults=response.items[0]
      if(this.answerResults.answers && this.answerResults.answers.length>0){
        this.isSearchResultAvlbl=true;
      }else{
        this.isSearchResultAvlbl=false;
      }
      // this.getStoAnswersSub.unsubscribe();
    },
      error => {
        this.isSearchResultAvlbl=false;
        this.spinnerService.hide();
        this.searchResults=[]
        console.log(error)
      })

  }

  
  ngOnDestroy() {
    if(this.getStoAnswersSub)
    this.getStoAnswersSub.unsubscribe()
  }

}
