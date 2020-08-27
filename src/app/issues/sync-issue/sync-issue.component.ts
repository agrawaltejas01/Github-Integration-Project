import { Component, OnInit } from '@angular/core';

import { ApiCallService } from '../../store/service/api-call.service';
import { IssueSchema } from 'src/app/store/issue-schema';
@Component({
	selector: 'app-sync-issue',
	templateUrl: './sync-issue.component.html',
	styleUrls: ['./sync-issue.component.css']
})
export class SyncIssueComponent implements OnInit {

	issues: IssueSchema[] = [];
	issuesSynced: Boolean = false;

	constructor(
		private api: ApiCallService
	) {

	}

	ngOnInit(): void {
		// this.syncIssues();

		// if(this.issuesSynced)
			this.getPaginatedIssues(1)
	}

	syncIssues() {
		this.api.syncIssues().subscribe((data: Boolean) => {
			this.issuesSynced = data;
			console.log(this.issues);
		});
	}

	getPaginatedIssues(page) {
		this.api.getPaginatedIssues(page).subscribe((data: IssueSchema[]) => {
			this.issues = data;
			console.log(this.issues);
		});
	}

	// getDays() {
	// 	this.api.getDays(55).subscribe((data: IssueSchema[]) => {
	// 		this.issues = data;
	// 		console.log(this.issues);
	// 	});
	// }

}
