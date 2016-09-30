import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'about-app',
	templateUrl: '../template/about.html'
})
export class AboutComponent implements OnInit {

	constructor(private titleService : Title) { }

	ngOnInit() : void {
		this.titleService.setTitle('About - ASP.NET Core with Angular2');
	}

}