import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponentComponent } from './searchbar-component/searchbar-component.component';
import { AnswerComponentComponent } from './answer-component/answer-component.component';
import {InputTextModule} from 'primeng/inputtext';
import { commonService } from './common-service';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponentComponent,
    AnswerComponentComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    InputTextModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot(), 
  ],
  providers: [commonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
