"use strict";
var heroes_component_1 = require("./components/heroes.component");
var hero_detail_component_1 = require("./components/hero-detail.component");
var dashboard_component_1 = require("./components/dashboard.component");
exports.APP_ROUTES = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    }
];
//# sourceMappingURL=app.routes.js.map