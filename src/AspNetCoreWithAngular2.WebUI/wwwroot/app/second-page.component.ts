import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'second-page-app',
	templateUrl: '../template/second-page.html'
})
export class SecondPageComponent implements OnInit {

	constructor(private titleService : Title) { }

	ngOnInit() : void {
		this.titleService.setTitle('Second Page - ASP.NET Core with Angular2');
	}

}