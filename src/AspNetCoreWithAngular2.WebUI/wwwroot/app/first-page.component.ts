import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'first-page-app',
	templateUrl: '../template/first-page.html'
})
export class FirstPageComponent implements OnInit {

	constructor(private titleService : Title) { }

	ngOnInit() : void {
		this.titleService.setTitle('First Page - ASP.NET Core with Angular2');
	}
}