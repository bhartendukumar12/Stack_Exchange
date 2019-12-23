import { Component, OnInit,NgZone } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { commonService } from 'src/app/common-service';

@Component({
  selector: 'app-searchbar-component',
  templateUrl: './searchbar-component.component.html',
  styleUrls: ['./searchbar-component.component.scss']
})

export class SearchbarComponentComponent implements OnInit {


  searchResults:any=[];
  lastFiveResults:any=[];
  isQuestionsLoaded:boolean=true;
  answerResults:any=[];
  isSearchResultAvlbl:boolean=true;

  getStoQuestionsSub: Subscription;
  searchTermUpdatedSub:Subscription;
  searchTerm:any;
  constructor(private commonService : commonService ,  private router: Router, 
    private zone: NgZone, private spinnerService: NgxSpinnerService,  ) { }

  ngOnInit() {
    
    if(this.commonService.searchTerm){
      this.searchTerm=this.commonService.searchTerm
      this.getResult(this.commonService.searchTerm);
    }

    this.searchTermUpdatedSub=this.commonService.searchTermUpdated.subscribe(searchTerm => {
      this.zone.run(() => {
         this.getResult(searchTerm);
        // this.searchTermUpdatedSub.unsubscribe();
      })

    })

    this.searchTermUpdatedSub=this.commonService.lastresultsUpdated.subscribe(searchTerm => {
      this.zone.run(() => {
        // this.searchTermUpdatedSub.unsubscribe();
        this.storedResults(searchTerm);
      })

    })

  }

  storedResults(searchTerm){
    this.searchResults=this.lastFiveResults[searchTerm.index].result;
    console.log( " this.searchResults",this.searchResults)
  }


  getResult(data){
    this.spinnerService.show();
    this.searchResults=[];
    this.isQuestionsLoaded=true;
    this.getStoQuestionsSub=this.commonService.getStoQuestions(data).subscribe(response => {
      this.spinnerService.hide();
        this.searchResults=response.items
        if( this.searchResults.length>0){
          this.isSearchResultAvlbl=true;
        }else{
          this.isSearchResultAvlbl=false;
        }
        this.lastFiveResults.push({title: this.searchTerm,result: this.searchResults})
        if(this.lastFiveResults.length==5){
          this.lastFiveResults.splice(0,1)
        }
        console.log( " this.lastFiveResults",this.lastFiveResults)
      
      // this.getStoQuestionsSub.unsubscribe();
    },
      error => {
        this.isSearchResultAvlbl=false;
        this.spinnerService.hide();
        window.alert(error.error_message)
        console.log(error)
      })
  }

  navigateToAnswer(questionId){
    this.router.navigate(['home/answer'],{ queryParams: { id: questionId.question_id } });
    this.isQuestionsLoaded=false;
  }


  ngOnDestroy() {
    if(this.getStoQuestionsSub)
    this.getStoQuestionsSub.unsubscribe()

    if(this.searchTermUpdatedSub)
    this.searchTermUpdatedSub.unsubscribe();
  }
  
}
