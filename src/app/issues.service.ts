import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { issues } from '../assets/mock-issues';
@Injectable({
  providedIn: 'root'
})
export class IssuesService {

	private issues: Issue[] = [];
	constructor() { }
	getPendingIssues(): Issue[] {
		 return issues.filter(issue =>
		 !issue.completed_date);// this.issues;
		
	}
	createIssue(issue: Issue) {
		issue.issueNo = this.issues.length + 1;
		this.issues.push(issue);
		}
}
