"use strict";
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var HTTPComponent_component_1 = require("./HTTP/HTTPComponent.component");
var routes = [
    { path: '', component: dashboard_component_1.DashboardComponent },
    { path: 'login', component: login_component_1.Login },
    { path: 'chart', loadChildren: 'app/barchart/barchart.module' },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'HTTP', component: HTTPComponent_component_1.HTTPComponent }
];
exports.appRoutes = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map