import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'home-app',
	templateUrl: '../template/home.html'
})
export class HomeComponent implements OnInit {

	constructor(private titleService : Title) { }

	ngOnInit() : void {
		this.titleService.setTitle('ASP.NET Core with Angular2');
	}

}