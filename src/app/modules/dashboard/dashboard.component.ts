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

  constructor(public dialog: MatDialog, private _chartService: ChartService) {
    this.delay(5000);
    // Pie Chart
    this.pieChartOptions = {
      // series: [44, 55, 13, 43, 22],
      chart: {
        width: 350,
        type: 'pie',
      },
      // labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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

    // {
    //   series: [25, 25, 25, 25, 25],
    //   labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Watermelons'],
    //   chart: {
    //     height: 350,
    //     width: 350,
    //     type: 'pie',
    //     toolbar: {
    //       show: true,
    //       tools: {
    //         download: true,
    //         selection: true,
    //         zoom: true,
    //         zoomin: true,
    //         zoomout: true,
    //         pan: true,
    //         reset: true,
    //       },
    //       autoSelected: 'zoom',
    //     },
    //   },
    // };

    //Bar Chart

    this.barChartOptions = {
      series: [
        {
          name: 'serie1',
          data: [44, 55, 41, 64, 22, 43, 21],
        },
        {
          name: 'serie2',

          data: [53, 32, 33, 52, 13, 44, 32],
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
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
      },
    };

    // Gradient Line Chart
    this.gradientChartOptions = {
      series: [
        {
          name: 'Likes',
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
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
        categories: [
          '1/11/2000',
          '2/11/2000',
          '3/11/2000',
          '4/11/2000',
          '5/11/2000',
          '6/11/2000',
          '7/11/2000',
          '8/11/2000',
          '9/11/2000',
          '10/11/2000',
          '11/11/2000',
          '12/11/2000',
          '1/11/2001',
          '2/11/2001',
          '3/11/2001',
          '4/11/2001',
          '5/11/2001',
          '6/11/2001',
        ],
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

    // Column Charts
    this.columnChartOptions = {
      series: [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
      chart: {
        type: 'bar',
        // width: '600px',

        // height: '440px',
        // width: '440px',
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
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
        ],
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

    this.set_all_sbl_data();
  }

  ngOnInit(): void {
    this._chartService.get_sbl_data().subscribe((result) => {
      // this.owner_details =result.message;
      console.log('hiii');
      console.log(result);
      this.test = result.message;
      console.log(this.test[0].label);
      this.set_all_sbl_data();
    });
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
  set_all_sbl_data() {
    this.test.forEach((element) => {
      console.log(element.series);
      this.pie_chart_labels.push(element.label);
      this.pie_chart_series.push(element.series);
    });

    console.log(this.pie_chart_series);
    this.delay(3000);

    // this.test[0].label
  }
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
