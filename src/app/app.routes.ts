import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChartComponent} from './barchart/barchart.component';
import {RegisterComponent} from './register/register.component';
import {Login} from './login/login.component';
import {HTTPComponent} from './HTTP/HTTPComponent.component';


const routes=[
	{path:'', component:DashboardComponent},
	{path:'login',component:Login},
	{path:'chart',loadChildren:'app/barchart/barchart.module'},
	{path:'register',component:RegisterComponent},
	{path:'HTTP',component:HTTPComponent}
	];

export const appRoutes=RouterModule.forRoot(routes);
