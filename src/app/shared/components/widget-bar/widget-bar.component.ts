import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ChartService } from 'src/app/modules/services/chart.service';

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

  test = [];
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

  constructor(private _chartService: ChartService) {
    
  }

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
            width: 280,
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
            width: 280,
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
            width: 280,
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
      this.dynamicItemTopicsForShared = this.dynamicItemTopicsForShared.filter(
        (result) => {
          console.log(result);
          console.log(this.dynamicItemTopicsForShared);
          return result
            .toLocaleLowerCase()
            .match(this.itemName.toLocaleLowerCase());
        }
      );
    } else if (this.itemName == '') {
      this.dynamicItemTopics = [
        'Sales by Location',
        'Annual Sales by Gender',
        'Monthly Sales',
        'Monthly Sales Growth',
      ];
      this.dynamicItemTopicsForShared = ['Sales Funnel', 'Industry Trends'];
    }
  }
}
