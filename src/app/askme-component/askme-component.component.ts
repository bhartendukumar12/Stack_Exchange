import { Component, OnInit } from '@angular/core';
import {commonService} from '../common-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-askme-component',
  templateUrl: './askme-component.component.html',
  styleUrls: ['./askme-component.component.scss']
})
export class AskmeComponentComponent implements OnInit {

  userInput:any;
  recentSearchTerms:any=[]
  
  constructor(private commonService : commonService ,  private router: Router, 
    ) { }

    ngOnInit() {

    }
  
    search(){   
      this.commonService.searchTerm=this.userInput;
      this.router.navigate(['home/question']);  
      if(this.recentSearchTerms.length==5){
        this.recentSearchTerms.splice(0,1)
      }else{
        this.recentSearchTerms.push(this.userInput)
      }
     
      this.commonService.setSearchTerm(this.userInput)
  
   
    }
  
    reacentSearchMethod(element,index){
      this.userInput=element;
      this.router.navigate(['home/question']);  
      console.log("index",index)
      this.commonService.setlastResults({index:index , searchTerm:element })
  
    }

}
