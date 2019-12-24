import { Injectable , EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class commonService {
    
    constructor(private http: HttpClient) {
    }

    getStoQuestions(userInput){
        let url='https://cors-anywhere.herokuapp.com/https://api.stackexchange.com/2.2/search/excerpts?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=activity&q='+userInput+'&filter=!9Z(-x.0nI'
        return this.http.get(url).pipe(map((res: any) => res));

      }

      getStoAnswers(questionId){
        let url='https://cors-anywhere.herokuapp.com/https://api.stackexchange.com/2.2/questions/'+questionId+'?order=desc&sort=activity&site=stackoverflow&filter=!-y(KwOdKR5Ga7mmruVArx2SJykc-M)3jKiDQBk1fq'
        return this.http.get(url).pipe(map((res: any) => res));

      }


      searchTermUpdated:EventEmitter<any> = new EventEmitter<any>();
      setSearchTerm(searchTerm){
          this.searchTermUpdated.emit(searchTerm);
      }

      searchTerm:any;

      lastresultsUpdated:EventEmitter<any> = new EventEmitter<any>();
      setlastResults(searchTerm){
          this.lastresultsUpdated.emit(searchTerm);
      }

      storedResults:any=[];

      isStoreResultsClicked:boolean=false;

      lastStoredResultsParams={index:null , searchTerm:null }
}


