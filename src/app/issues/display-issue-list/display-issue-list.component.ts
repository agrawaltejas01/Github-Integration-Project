import { Component, OnInit, Input } from '@angular/core';
import { IssueSchema } from 'src/app/store/issue-schema';

@Component({
  selector: 'display-issue-list',
  templateUrl: './display-issue-list.component.html',
  styleUrls: ['./display-issue-list.component.css']
})
export class DisplayIssueListComponent implements OnInit {

  @Input() issueList : IssueSchema[];
  constructor() { }

  ngOnInit(): void {
  }

}
