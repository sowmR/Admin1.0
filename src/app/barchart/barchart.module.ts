import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { ChartsModule } from "ng2-charts";

import {chartRoutes} from "./barchart.routes";
import {ChartComponent} from "./barchart.component";



@NgModule({
	imports:[CommonModule,chartRoutes,ChartsModule],
	declarations:[ChartComponent]
})

export default class ChartModule{}