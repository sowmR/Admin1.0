import {Component} from '@angular/core';

@Component({
  selector:'barchart',
  templateUrl:'./barchart.html'
})

export class ChartComponent{
  barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true
    };
  barChartLabels:string[] = ['Month1', 'Month2', 'Month3', 'Month4', 'Month5', 'Month6', 'Month7', 'Month8', 'Month9', 'Month10', 'Month11', 'Month12'];
  barChartType:string = 'bar';
  barChartLegend:boolean = true;
 
  barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'R-Data'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
}

}