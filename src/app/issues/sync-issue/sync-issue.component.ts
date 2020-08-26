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

	constructor(
		private api: ApiCallService
	) {

	}

	ngOnInit(): void {
		this.getDays();
	}

	getDays() {
		this.api.getDays(55).subscribe((data: IssueSchema[]) => {
			this.issues = data;
			console.log(this.issues);
		});
	}

}
