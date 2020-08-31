import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-widget-bar',
  templateUrl: './widget-bar.component.html',
  styleUrls: ['./widget-bar.component.css'],
})
export class WidgetBarComponent implements OnInit {
  allwidgets = [];
  itemName: string = '';
  dynamicItemTopics = [
    'Sales by Location',
    'Annual Sales by Gender',
    'Monthly Sales',
    'Monthly Sales Growth',
  ];

  dynamicItemTopicsForShared = ['Sales Funnel', 'Industry Trends'];

  public pieChartOptions;
  public barChartOptions;
  public gradientChartOptions;
  public columnChartOptions;

  series = [25, 25, 25, 25, 100];

  constructor() {
    // Pie Chart
    this.pieChartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 280,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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
        width: 280,
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
          fontSize: '10px',
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
        width: 280,
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
          data: [44, 55, 57, 56, 61, 58],
        },
        {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105],
        },
        {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48],
        },
      ],
      chart: {
        type: 'bar',
        width: 280,

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
          'Jul'
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
  }

  ngOnInit(): void {}

  drophor(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.dynamicItemTopics,
      event.previousIndex,
      event.currentIndex
    );
  }

  SearchWidgets() {
    if (this.itemName != '') {
      this.dynamicItemTopics = this.dynamicItemTopics.filter((result) => {
        console.log(result);
        console.log(this.dynamicItemTopics);
        return result
          .toLocaleLowerCase()
          .match(this.itemName.toLocaleLowerCase());
      });
    } else if (this.itemName == '') {
      this.dynamicItemTopics = [
        'Sales by Location',
        'Annual Sales by Gender',
        'Monthly Sales',
        'Monthly Sales Growth',
      ];
    }
  }
}
