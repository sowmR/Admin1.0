import {ChartComponent} from "./barchart.component";
import {RouterModule} from "@angular/router";

const routes = [
    {path:"", component:ChartComponent}
];

export const chartRoutes=RouterModule.forChild(routes);