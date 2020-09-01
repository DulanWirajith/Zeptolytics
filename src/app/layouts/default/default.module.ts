import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from './default.component'
import {DashboardComponent} from 'src/app/modules/dashboard/dashboard.component'
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

import { FlexLayoutModule } from '@angular/flex-layout';

import { DragDropModule } from '@angular/cdk/drag-drop';
import {NgApexchartsModule} from "ng-apexcharts";
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ZoomPopupDialogComponent } from 'src/app/modules/zoom-popup-dialog/zoom-popup-dialog.component';
import {ChartService} from 'src/app/modules/services/chart.service'

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ZoomPopupDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule,
    FlexLayoutModule,
    DragDropModule,
    NgApexchartsModule,
    MatIconModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [ChartService],
})
export class DefaultModule { }
