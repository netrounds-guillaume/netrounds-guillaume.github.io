import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, ViewChild, ViewEncapsulation } from '@angular/core';
import { ResizedEvent, AngularResizedEventModule } from 'angular-resize-event';
import { DxChartComponent, DxChartModule, DxDataGridModule } from 'devextreme-angular';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import { throttle } from 'lodash';

@Component({
  selector: 'app-dashboard-widget',
  templateUrl: 'dashboard-widget.component.html',
  styleUrls: ['./dashboard-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DashboardWidgetComponent {
  @ViewChild(DxChartComponent) chart: DxChartComponent;

  @Input()
  dataSource: any;

  @Input()
  monitors: any;

  @Input()
  tasks: any;

  @Input()
  series: any;

  @Input()
  widget: any;

  tasksDataSourceStorage: any;

  constructor() {
    this.tasksDataSourceStorage = [];
    this.handleResize = throttle(this.handleResize, 1000).bind(this);
  }

  handleResize(event: ResizedEvent) {

    console.log(event);
    if(!this.chart) {
      return;
    }
    // this.chart.instance.option('size', {height: event.newHeight, width: event.newWidth});
    this.chart.instance.render();
  }

  customizeTooltip(arg: any) {
    return {
          text: arg.valueText
    };
  }

  completedValue(rowData) {
    return rowData.Status === 'Completed';
  }

  getTasks(key) {
    let item = this.tasksDataSourceStorage.find((i) => i.key === key);
    if (!item) {
        item = {
            key,
            dataSourceInstance: new DataSource({
                store: new ArrayStore({
                    data: this.tasks,
                    key: 'id'
                }),
                filter: ['monitor_id', '=', key]
            })
        };
        this.tasksDataSourceStorage.push(item);
    }
    return item.dataSourceInstance;
  }

  getEsBarImage(monitor: any) {
    return 'data:image/png;base64,' + monitor.data.esbar.image_base64;
  }
}

@NgModule({
  imports: [
    CommonModule,
    DxChartModule,
    DxDataGridModule,
    AngularResizedEventModule
  ],
  declarations: [ DashboardWidgetComponent ],
  exports: [ DashboardWidgetComponent ]
})
export class DashboardWidgetModule { }
