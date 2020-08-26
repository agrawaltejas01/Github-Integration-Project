import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IssueSchema } from '../issue-schema'

@Injectable({
	providedIn: 'root'
})
export class ApiCallService {

	baseUrl: string = "";

	constructor(
		private http : HttpClient
	) 
	{
		this.baseUrl = "http://127.0.0.1:8000/";
	}

	syncIssues()
	{
		return this.http.get<IssueSchema[]>(this.baseUrl + "syncIssues")
	}

	getDays(days : number)
	{
		return this.http.get<IssueSchema[]>(this.baseUrl + "getDays/" + days)
	}

	getLabel(label : string)
	{
		return this.http.get<IssueSchema[]>(this.baseUrl + "getLabel/" + label)
	}

	getUser(user : string)
	{
		return this.http.get<IssueSchema[]>(this.baseUrl + "getUser/" + user)
	}
}
