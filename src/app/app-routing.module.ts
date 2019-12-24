import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { commonService } from './common-service';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AskmeComponentComponent } from './askme-component/askme-component.component';
import { SearchbarComponentComponent } from './askme-component/searchbar-component/searchbar-component.component';
import { AnswerComponentComponent } from './askme-component/answer-component/answer-component.component';

const Routes: Routes = [	
    {
      path: 'search',
      component: AskmeComponentComponent,

      children: [
         { path: 'question', component:SearchbarComponentComponent},
         { path: 'answer',component: AnswerComponentComponent},     
    ]
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
    },
   
    {
      path: "**",
      redirectTo: "/search",
      pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AskmeComponentComponent,
    AnswerComponentComponent,
    SearchbarComponentComponent,
],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot(), 
    RouterModule.forRoot(Routes, {useHash: true})

  ],
  providers: [commonService],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
