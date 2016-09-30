import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { FirstPageComponent } from './first-page.component';
import { SecondPageComponent } from './second-page.component';
import { AboutComponent } from './about.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'first-page',
		component: FirstPageComponent
	},
	{
		path: 'second-page',
		component: SecondPageComponent
	},
	{
		path: 'about',
		component: AboutComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);