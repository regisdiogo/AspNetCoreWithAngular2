import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { FirstPageComponent } from './first-page.component';
import { SecondPageComponent } from './second-page.component';
import { AboutComponent } from './about.component';
import { routing } from './app.routing'

@NgModule({
	imports: [ 
		BrowserModule, 
		HttpModule, 
		routing
	],
	declarations: [ 
		AppComponent,
		HomeComponent,
		FirstPageComponent,
		SecondPageComponent,
		AboutComponent
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }