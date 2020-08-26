import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser'

// Components
import { SyncIssueComponent } from './sync-issue/sync-issue.component';

// Service
import { ApiCallService } from '../store/service/api-call.service';



@NgModule({
  declarations: [
    SyncIssueComponent
  ],

  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ],

  exports: [
    SyncIssueComponent
  ],

  providers: [
    ApiCallService
  ]
})
export class IssuesModule { }
