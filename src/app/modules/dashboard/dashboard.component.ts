import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { ZoomPopupDialogComponent } from '../zoom-popup-dialog/zoom-popup-dialog.component';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public pieChartOptions;
  public barChartOptions;
  public gradientChartOptions;
  public columnChartOptions;

  test = [];
  // html_code =
  //   '<div class="row" style="height: 250px;">' +
  //   '<apx-chart width="100%" [series]="series" [chart]="pieChartOptions.chart" [labels]="pieChartOptions.labels">' +
  //   '</apx-chart>' +
  //   '</div>';
  pie_chart_series = [];
  pie_chart_labels = [];
  gradient_chart_data = [];
  gradient_chart_xaxis = [];
  bar_chart_data1 = [];
  bar_chart_data2 = [];
  bar_chart_xaxis = [];
  column_chart_data1 = [];
  column_chart_data2 = [];
  column_chart_data3 = [];
  column_chart_xaxis = [];

  // @Output() toggleSidebarForMe : EventEmitter<any> = new EventEmitter();

  // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  // todo = [
  //   'Get to work',
  //   'Pick up groceries',
  //   'Buy flowers for wife',
  //   'Go home',
  //   'Eat dinner',
  //   'Watch Godzilla',
  //   'Fall asleep'
  // ];

  //   series: [
  //     {
  //         name: "Series 1",
  //         data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
  //     }
  // ];
  ngOnInit(): void {
    this._chartService.get_sbl_data().subscribe((result) => {
      this.test = result.message;
      console.log(this.test);
      if (this.test.length > 0) {
        this.test.forEach((element) => {
          //console.log(element.series);
          this.pie_chart_labels.push(element.label);
          this.pie_chart_series.push(element.series);
        });
        this.pieChartOptions = {
          series: this.pie_chart_series,
          chart: {
            width: 350,
            type: 'pie',
          },
          labels: this.pie_chart_labels,
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        };
      }
    });

    this._chartService.get_msg_data().subscribe((result) => {
      this.test = result.message;
      if (this.test.length > 0) {
        this.test.forEach((element) => {
          //console.log(element.series);
          this.gradient_chart_data.push(element.data);
          this.gradient_chart_xaxis.push(element.xaxis);
        });

        // Gradient Line Chart
        this.gradientChartOptions = {
          series: [
            {
              name: 'Likes',
              data: this.gradient_chart_data,
            },
          ],
          chart: {
            // height: '440px',
            // width: 440,
            // redrawOnParentResize: true,
            // width: '490px',
            // height:440,
            type: 'line',
          },
          stroke: {
            width: 7,
            curve: 'smooth',
          },
          xaxis: {
            type: 'datetime',
            categories: this.gradient_chart_xaxis,
          },
          title: {
            text: 'Social Media',
            align: 'left',
            style: {
              fontSize: '16px',
              color: '#666',
            },
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              gradientToColors: ['#FDD835'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100],
            },
          },
          markers: {
            size: 4,
            colors: ['#FFA41B'],
            strokeColors: '#fff',
            strokeWidth: 2,
            hover: {
              size: 7,
            },
          },
          yaxis: {
            min: -10,
            max: 40,
            title: {
              text: 'Engagement',
            },
          },
        };
      }
    });

    this._chartService.get_asbg_data().subscribe((result) => {
      this.test = result.message;
      if (this.test.length > 0) {
        this.test.forEach((element) => {
          //console.log(element.series);
          this.bar_chart_data1.push(element.data1);
          this.bar_chart_data2.push(element.data2);
          this.bar_chart_xaxis.push(element.xaxis);
        });

        //Bar Chart

        this.barChartOptions = {
          series: [
            {
              name: 'serie1',
              data: this.bar_chart_data1,
            },
            {
              name: 'serie2',
              data: this.bar_chart_data2,
            },
          ],
          chart: {
            type: 'bar',
            // height: '440px',
            // width: '350px',
            toolbar: {
              show: true,
              tools: {
                download: true,
                selection: true,
                zoom: true,
                zoomin: true,
                zoomout: true,
                pan: true,
                reset: true,
              },
              autoSelected: 'zoom',
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              dataLabels: {
                position: 'top',
              },
            },
          },
          dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
              fontSize: '12px',
              colors: ['#fff'],
            },
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff'],
          },
          xaxis: {
            categories: this.bar_chart_xaxis,
          },
        };
      }
    });

    this._chartService.get_ms_data().subscribe((result) => {
      this.test = result.message;
      if (this.test.length > 0) {
        this.test.forEach((element) => {
          //console.log(element.series);
          this.column_chart_data1.push(element.data1);
          this.column_chart_data2.push(element.data2);
          this.column_chart_data3.push(element.data3);
          this.column_chart_xaxis.push(element.xaxis);
        });

        // Column Charts
        this.columnChartOptions = {
          series: [
            {
              name: 'Net Profit',
              data: this.column_chart_data1,
            },
            {
              name: 'Revenue',
              data: this.column_chart_data2,
            },
            {
              name: 'Free Cash Flow',
              data: this.column_chart_data3,
            },
          ],
          chart: {
            type: 'bar',
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded',
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
          },
          xaxis: {
            categories: this.column_chart_xaxis,
          },
          yaxis: {
            title: {
              text: '$ (thousands)',
            },
          },
          fill: {
            opacity: 1,
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return '$ ' + val + ' thousands';
              },
            },
          },
        };
      }
    });
  }

  constructor(public dialog: MatDialog, private _chartService: ChartService) {
    //this.set_all_sbl_data();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      //drop within the same list
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      //drop to a different list
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  dynamicItemTopics = [
    'YTD Sales',
    'Sales by Location',
    'Annual Sales by Gender',
    'Monthly Sales Growth',
    'Sales Funnel',
  ];

  drophor(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.dynamicItemTopics,
      event.previousIndex,
      event.currentIndex
    );
  }

  clicked(topic) {
    console.log('clicked');
    console.log(topic);

    const dialogRef = this.dialog.open(ZoomPopupDialogComponent, {
      width: '450px',
      data: topic,
    });
  }

  onResize(event) {
    event.target.innerWidth;
    console.log('resiezed!');
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(ZoomPopupDialogComponent, {
  //     width: '450px',
  //     data: 'ZeeLot',
  //   });
  // }

  // async getAsyncData() {
  //   this.asyncResult = await this.httpclient.get(this.URL).toPromise();
  //   console.log(this.asyncResult);
  // }
  async delay(ms: number) {
    await new Promise((resolve) => setTimeout(() => resolve(), ms)).then(() =>
      console.log('fired')
    );
  }
  // set_all_sbl_data() {
  //   this.test.forEach((element) => {
  //     console.log(element.series);
  //     this.pie_chart_labels.push(element.label);
  //     this.pie_chart_series.push(element.series);
  //   });

  //   console.log(this.pie_chart_series);
  //   this.delay(3000);

  //   // this.test[0].label
  // }
}

//
// title: {
//   text: undefined,
//   align: 'left',
//   margin: 10,
//   offsetX: 0,
//   offsetY: 0,
//   floating: false,
//   style: {
//     fontSize:  '14px',
//     fontWeight:  'bold',
//     fontFamily:  undefined,
//     color:  '#263238'
//   },
// }
