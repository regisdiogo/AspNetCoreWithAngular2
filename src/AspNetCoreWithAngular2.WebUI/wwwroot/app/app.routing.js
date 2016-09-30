"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var first_page_component_1 = require('./first-page.component');
var second_page_component_1 = require('./second-page.component');
var about_component_1 = require('./about.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'first-page',
        component: first_page_component_1.FirstPageComponent
    },
    {
        path: 'second-page',
        component: second_page_component_1.SecondPageComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map